## About the project

This is a little fun web app for creating virtual gifts and send them via QR-code to your beloved ones.

It allows you to signup / signin and create virtual presents with a little gift icon and text and
additionally a timer revealing when the virtual present can be opened.  It generates a QR code which you can then 'gift' away. It integrates paypal so that gifts must be purchased before they can be viewed.

There is a running instance on https://virtual-presents.web.app/.
To start locally on port 3000, run

`npm install && npm run start`

## Tech

- React.js + Redux + Redux-Saga
- Material UI
- Firebase realtime database
- Firebase hosting
- Paypal for payment

The firebase realtime database rules reside in firebaseRules.json.
For a different hosting the src/utility/config.js has to be edited accordingly.
There is also some hard coded payment information from Paypal in src/Checkout/Checkout.js.
