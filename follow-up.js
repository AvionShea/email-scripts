require('dotenv').config();

const nodemailer = require('nodemailer');

const adminEmail = process.env.ADMIN_EMAIL;
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;

const myName = "firstName lastName";
const myEmail = "firstNamelastName@server.com";
const myLinkedin = "https://www.linkedin.com/in/firstName-lastName/";
const myPhoneNumber = "(000) 555-1234";

const recipients = [
    {
        hiringManagerName: "Jane Doe",
        hiringManagerEmail: "fakeEmail@server.com",
        positionJobTitle: "Software Engineer I",
        companyName: "NASA",
        dateOfInterview: "08/01/2024",
        specificAspectOfTheJobOrCompany: "the James Webb Telescope project",
        specificSkillOrExperience: "being great under pressure, a strategic planner, and the ability to quickly adapt to change",
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

const sendMail = async (hiringManagerEmail, positionJobTitle, emailBody) => {

    let mailOptions = {
        from: adminEmail,
        to: hiringManagerEmail,
        subject: ` Follow-Up on ${positionJobTitle} Interview - ${myName}`,
        html: emailBody,
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent successfully to ${hiringManagerEmail}!`);
        }
    });
};

recipients.forEach((recipient) => {

    const emailBody =

        `<div>
            <p>Dear ${recipient.hiringManagerName},</p>
    
        <p>I hope this message finds you well. I am writing to follow up on my recent interview for the ${recipient.positionJobTitle} position at ${recipient.companyName} on ${recipient.dateOfInterview}. I remain very interested in the opportunity and am excited about the possibility of joining your team.</p >
        
        <p>Since our interview, I have been reflecting on our discussion about ${recipient.specificAspectOfTheJobOrCompany}. I am confident that my skills in ${recipient.specificSkillOrExperience} would allow me to make a meaningful contribution to ${recipient.companyName}.</p>
        
        <p>If there are any further steps or additional information needed from my side, please let me know. I appreciate your time and consideration and look forward to hearing from you soon.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        <p>${myPhoneNumber}</p>
        </div>
        `

    sendMail(recipient.hiringManagerEmail, recipient.positionJobTitle, emailBody);
});