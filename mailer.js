
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "w0192ea8.kasserver.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Chris Rawk👻" <node@webdemos.at>',
    to: "ce@rawk.at, service@rawk.at", 
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