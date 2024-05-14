const nodemailer = require("nodemailer");

const EmailSend = async option => {

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user:process.env.EMAIL_USER,
          pass:process.env.EMAIL_PASSWORD,
        },
      });

      const EmailOption = {

    from: 'sunairahmed9908@gmail.com', // sender address
    to: option.user, // list of receivers
    subject: option.subject, // Subject line
    text: option.text, // plain text body 
      }

      await transporter.sendMail(EmailOption)
}

module.exports = EmailSend