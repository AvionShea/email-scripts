require('dotenv').config();

const nodemailer = require('nodemailer');

const adminEmail = process.env.ADMIN_EMAIL;
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;

const myName = "firstName lastName";
const myEmail = "firstNamelastName@server.com";
const myLinkedin = "https://www.linkedin.com/in/firstName-lastName/";

const recipients = [
    {
        contactName: "Jane Doe",
        contactEmail: "fakeEmail@server.com",
        platformOrMutualConnection: "LinkedIn",
        specificFieldOrProject: "software engineering",
        industryOrSpecificTopic: "AI",
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

const sendMail = async (contactEmail, emailBody) => {

    let mailOptions = {
        from: adminEmail,
        to: contactEmail,
        subject: `Coffee Chat Request`,
        html: emailBody
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent successfully to ${contactEmail}!`);
        };
    });
};

recipients.forEach((recipient) => {

    const emailBody =

        `<div>
            <p>Dear ${recipient.contactName},</p>
    
        <p>I hope you're doing well. My name is ${myName}, and I came across your profile on ${recipient.platformOrMutualConnection}. I was particularly impressed by your work in ${recipient.specificFieldOrProject}.</p >
        
        <p>I am very interested in learning more about your career journey and insights into ${recipient.industryOrSpecificTopic}. If you have some time in the next couple of weeks, I would love to grab a coffee and have a brief chat.</p>
        
        <p>Please let me know if this would be possible and your availability. I am looking forward to the opportunity to connect with you.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        </div>
        `

    sendMail(recipient.contactEmail, emailBody);
});