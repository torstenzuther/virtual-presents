const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.notifyPayment = functions.https.onRequest(async (req, res) => {
    const id = req.body.custom;
     await admin.database().ref(`/payment/${id}/`).set(
        { 
            payment_date: req.body.payment_date,
            payment_status: req.body.payment_status,
            address_status: req.body.address_status,
            payer_status: req.body.payer_status,
            first_name: req.body.first_name,
            last_name: req.body.last_name, 
            payer_email: req.body.payer_email,
            payer_id: req.body.payer_id,
            address_name: req.body.address_name,
            address_country: req.body.address_country,
            address_country_code: req.body.address_country_code,
            address_zip: req.body.address_zip,
            address_state: req.body.address_state,
            address_city: req.body.address_city,
            address_street: req.body.address_street,
            business: req.body.business,
            receiver_email: req.body.receiver_email,
            receiver_id: req.body.receiver_id,
            residence_country: req.body.residence_country,
            item_name: req.body.item_name,
            item_number: req.body.item_number,
            quantity: req.body.quantity,
            shipping: req.body.shipping,
            tax: req.body.tax,
            mc_currency: req.body.mc_currency,
            mc_fee: req.body.mc_fee,
            mc_gross: req.body.mc_gross,
            mc_gross_1: req.body.mc_gross_1,
            txn_type: req.body.txn_type,
            txn_id: req.body.txn_id,
            notify_version: req.body.notify_version,
            custom: id,
            invoice: req.body.invoice
        }
    );

    res.send(req.body);
  });