#test card numbers:

Visa: 4242 4242 4242 4242

Mastercard: 5555 5555 5555 4444

American Express: 3782 822463 10005


Stripe test **secret** key:

In  /server.js

`const stripe = require('stripe')('insert_stripe_test_secret_key')`


In  /public/views/index.handlebars

change "data-key" to actual Stripe test **public** key
