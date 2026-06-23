const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const mail_setup = {
    service: "gmail",
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
};
const transport = nodemailer.createTransport(mail_setup);

const sendWelcomeEmail = async (sending_to) => {
    try{
        const mail_details = {
            from: process.env.MAIL_USER,
            to: sending_to,
            subject: "Welcome to class",
            html: `Hi User, <br> Welcome to class. Thanks for joining us.`
        }
        const info = await transport.sendMail(mail_details);
        return info;
    }catch(e){
        console.log("Error sending email: ", e);
        throw error;
    }

}


module.exports = { sendWelcomeEmail };