require('dotenv').config();

const nodemailer = require('nodemailer');

const adminEmail = process.env.ADMIN_EMAIL;
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;

const myName = "firstName lastName";
const myEmail = "firstNamelastName@server.com";
const myLinkedin = "https://www.linkedin.com/in/firstName-lastName/";


const recipients = [
    {
        contactName: "Jordan",
        contactEmail: "fakeEmail@server.com",
        companyName: "NVIDIA",
    },
];


const transporter = nodemailer.createTransport({
    service: "yahoo", //"gmail" <- use for gmail
    host: "smtp.mail.yahoo.com", //"smtp.gmail.com" <- use for gmail
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: adminEmail, //must be hardcoded
        pass: adminEmailPassword //must be hardcoded
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
});

const sendMail = async (contactEmail, companyName, emailBody) => {

    let mailOptions = {
        from: adminEmail,
        to: contactEmail,
        subject: `Inquiry About Your Experience at ${companyName}`,
        html: emailBody,
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent successfully to ${contactEmail}!`);
        }
    });
};

recipients.forEach((recipient) => {

    const emailBody =

        `<div>
            <p>Dear ${recipient.contactName},</p>
    
        <p>I hope this message finds you well. My name is ${myName}, and I am currently exploring opportunities at ${recipient.companyName}. I came across your profile on LinkedIn and was impressed by your experience and role within the company.</p >
        
        <p>I am very interested in learning more about what it’s like to work at ${recipient.companyName}, particularly regarding the company culture, the pros and cons, and any insights you might have about the work environment. Your firsthand experience would be invaluable to me as I consider this potential career move.</p>
        
        <p>Would you be open to a brief chat to share your perspective? I’d greatly appreciate any time you can spare. If it’s more convenient, I can also send you a few questions via email.</p>

        <p>Thank you in advance for your time and insights. I look forward to hearing from you.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        </div>
        `

    sendMail(recipient.contactEmail, recipient.eventTitle, emailBody);
});