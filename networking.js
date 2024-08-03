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
        eventTitle: "Tech Mixer",
        dateOrDayOfEvent: "08/09/2024",
        specificTopicDiscussed: "the current job market",
        specificAspectOfTheirWorkOrIndustry: "the correlation of referrals and getting interviews",
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

const sendMail = async (contactEmail, eventTitle, emailBody) => {

    let mailOptions = {
        from: adminEmail,
        to: contactEmail,
        subject: ` Great Connecting at ${eventTitle} `,
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
    
        <p>I hope you're doing well. My name is ${myName}, and we met at the ${recipient.eventTitle} on ${recipient.dateOrDayOfEvent}. I truly enjoyed our conversation about ${recipient.specificTopicDiscussed}.</p >
        
        <p>Your insights on ${recipient.specificAspectOfTheirWorkOrIndustry} were particularly enlightening. I would love to continue our discussion and explore ways we might be able to collaborate or support each other professionally.</p>
        
        <p>Would you be open to setting up a time for a coffee chat or a call in the next couple of weeks? I’m looking forward to staying connected.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        </div>
        `

    sendMail(recipient.contactEmail, recipient.eventTitle, emailBody);
});