var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

let transporter = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "zach.grusznski@gmail.com",
      pass: "TerayonK14"
    }
  })
);
exports.sendMail = functions.database
  .ref("/test/{pushId}")
  .onWrite((change, context) => {
    const post = change.after.val();
    console.log(post.name);

    const emailName = post.name;
    const emailEmail = post.email;
    const emailCompany = post.company;
    const emailDetails = post.details;
    const emailText =
      emailName + "\n" + emailEmail + "\n" + emailCompany + "\n" + emailDetails;

    var mailOptions = {
      from: "zach.grusznski@gmail.com",
      to: "gruzzy47@gmail.com",
      subject: "Test Mail",
      text: emailText
    };

    if (emailName && emailEmail && emailCompany && emailDetails) {
      transporter.sendMail(mailOptions, function(err, response) {
        if (err) {
          console.log("err" + err);
        } else {
          console.log("success" + emailText);
        }
      });
    }
  });

/*exports.sendMail = functions.https.onRequest((req, res) => {
  var mailOptions = {
    from: "zach.grusznski@gmail.com",
    to: "gruzzy47@gmail.com",
    subject: "Test Mail",
    text: "Testing the Mail"
  };
  transporter.sendMail(mailOptions, function(err, response) {
    if (err) {
      res.end("err");
      console.log(err);
    } else {
      res.end("Mail sent");
    }
  });
});
*/
