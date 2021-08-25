const functions = require("firebase-functions");
// eslint-disable-next-line no-unused-vars
const admin = require("firebase-admin");
const sgMail = require("@sendgrid/mail");

const API_KEY = functions.config().sendgrid.key;

sgMail.setApiKey(API_KEY);

exports.sendMail = functions.firestore
  .document("messages/{entry}")
  // eslint-disable-next-line no-unused-vars
  .onCreate(async (change, context) => {
    // configure mail options for nodemailer
    const msg = {
      from: "besampson0@gmail.com",
      to: "bnicerrr@gmail.com",
      subject: "Message from personal site.",
      html: `
      <h3>
        Someone is trying to get a hold of you.
      </h3>
      <p>
        <strong>Submitted by:</strong> ${change.after.data().name} <br>
        <strong>Email:</strong> ${change.after.data().email} <br>
        <strong>Message:</strong> ${change.after.data().message} <br>
      </p>
      `,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  });
