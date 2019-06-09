const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

exports.notifyPayment = functions.https.onRequest(async (req, res) => {
    const body = req.body;
    const id = req.body.custom;
    const payment_date = body.payment_date ? body.payment_date : "";
    const payment_status = body.payment_status ? body.payment_status : "";
    const address_status = body.address_status ? body.address_status : "";
    const payer_status = body.payer_status ? body.payer_status : "";
    const first_name = body.first_name ? body.first_name : "";
    const last_name = body.last_name ? body.last_name : "";
    const payer_email = body.payer_email ? body.payer_email : "";
    const payer_id = body.payer_id ? body.payer_id : "";
    const address_name = body.address_name ? body.address_name : "";
    const address_country = body.address_country ? body.address_country : "";
    const address_country_code = body.address_country_code ? body.address_country_code : "";
    const address_zip = body.address_zip ? body.address_zip : "";
    const address_state = body.address_state ? body.address_state : "";
    const address_city = body.address_city ? body.address_city : "";
    const address_street = body.address_street ? body.address_street : "";
    const business = body.business ? body.business : "";
    const receiver_email = body.receiver_email ? body.receiver_email : "";
    const receiver_id = body.receiver_id ? body.receiver_id : "";
    const residence_country = body.residence_country ? body.residence_country : "";
    const item_name = body.item_name ? body.item_name : "";
    const item_number = body.item_number ? body.item_number : "";
    const quantity = body.quantity ? body.quantity : "";
    const shipping = body.shipping ? body.shipping : "";
    const tax = body.tax ? body.tax : "";
    const mc_currency = body.mc_currency ? body.mc_currency : "";
    const mc_fee = body.mc_fee ? body.mc_fee : "";
    const mc_gross = body.mc_gross ? body.mc_gross : "";
    const mc_gross_1 = body.mc_gross_1 ? body.mc_gross_1 : "";
    const txn_type = body.txn_type ? body.txn_type : "";
    const txn_id = body.txn_id ? body.txn_id : "";
    const notify_version = body.notify_version ? body.notify_version : "";
    const invoice = body.invoice ? body.invoice : "";
    await admin.database().ref(`/payment/${id}/`).set(
        {
            payment_date: payment_date,
            payment_status: payment_status,
            address_status: address_status,
            payer_status: payer_status,
            first_name: first_name,
            last_name: last_name, 
            payer_email: payer_email,
            payer_id: payer_id,
            address_name: address_name,
            address_country: address_country,
            address_country_code: address_country_code,
            address_zip: address_zip,
            address_state: address_state,
            address_city: address_city,
            address_street: address_street,
            business: business,
            receiver_email: receiver_email,
            receiver_id: receiver_id,
            residence_country: residence_country,
            item_name: item_name,
            item_number: item_number,
            quantity: quantity,
            shipping: shipping,
            tax: tax,
            mc_currency: mc_currency,
            mc_fee: mc_fee,
            mc_gross: mc_gross,
            mc_gross_1: mc_gross_1,
            txn_type: txn_type,
            txn_id: txn_id,
            notify_version: notify_version,
            custom: id,
            invoice: invoice
        }
    );

    res.send(req.body);
  });