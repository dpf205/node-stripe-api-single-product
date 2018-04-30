const express = require('express');
const stripe = require('stripe')('sk_test_5h4DL4kRHrh28EmDCgZXmEQe');
const bodyParser =  require('body-parser');
const exphbs = require('express-handlebars');
let port = process.env.PORT || 5000;

let app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// app.use(express.static(__dirname + '/public'))
app.use(express.static(`${__dirname}/public`));


app.get('/', (req, res) => {
    res.render('index');
});


app.post('/charge', (req, res) => {
   const amount = 2500;

   stripe.customers.create({
       email: req.body.stripeEmail,
       source:  req.body.stripeToken
   })
       .then((customer) => {
           return stripe.charges.create({
               amount:amount,
               description: 'Simulated Digital Product',
               currency:'usd',
               customer: customer.id
           })
       })
       .then((charge) => {
           res.render('success')
       })
});

 app.listen(port, () => {
     console.log(`Express running on ${port}`);
 });

 // test cards
// Visa: 4242 4242 4242 4242
// Mastercard: 5555 5555 5555 4444
// American Express: 3782 822463 10005
