
"use strict";
const nodemailer = require("nodemailer");
const dotenv = require('dotenv').config()

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO, 
    subject: "Hello ✔",
    text: "Hello world?", 
    html: "<b>Hello world?</b>", 
  });

  console.log("Message sent: %s", info.messageId);

}

/*
   transporter.sendMail(message, **function**(err, info) {
         if (err) {
           console.log(err)
         } else {
           console.log(info);
         }
 */

main().catch(console.error);