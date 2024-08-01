require('dotenv').config();

const nodemailer = require('nodemailer');

const adminEmail = process.env.ADMIN_EMAIL;
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;

const myName = "firstName lastName";
const myEmail = "firstNamelastName@server.com";
const myLinkedin = "https://www.linkedin.com/in/firstName-lastName/";

const recipients = [
    {
        interviewerName: "Jane Doe",
        interviewerEmail: "fakeEmail@server.com",
        positionJobTitle: "Software Engineer I",
        companyName: "TikTok",
        dateOfInterview: "08/01/2024",
        specificProjectOrTeam: "TikTok Shop team",
        specificRelevantExperienceOrSkill: "JavaScript, customer service, and time management",
    },
    {
        interviewerName: "Nicole Strong",
        interviewerEmail: "fakeEmail@server.com",
        positionJobTitle: "Software Engineer, YouTube",
        companyName: "Google",
        dateOfInterview: "08/15/2024",
        specificProjectOrTeam: "YouTube team",
        specificRelevantExperienceOrSkill: "Ruby on Rails, TypeScript, and freelance web developer",
    },
    {
        interviewerName: "Dallas Steele",
        interviewerEmail: "fakeEmail@server.com",
        positionJobTitle: "Java Developer",
        companyName: "IBM",
        dateOfInterview: "08/22/2024",
        specificProjectOrTeam: "classified project",
        specificRelevantExperienceOrSkill: "Java, SQL, and confidentiality",
    },
    {
        interviewerName: "Diamond Smith",
        interviewerEmail: "fakeEmail@server.com",
        positionJobTitle: "Lead Software Engineer",
        companyName: "Lenovo",
        dateOfInterview: "08/20/2024",
        specificProjectOrTeam: "Thinkpad team",
        specificRelevantExperienceOrSkill: "leadership, project management, and collaboration",
    },
    {
        interviewerName: "Rasheed Jones",
        interviewerEmail: "fakeEmail@server.com",
        positionJobTitle: "Software Developer, Associate",
        companyName: "Booz | Allen | Hamilton",
        dateOfInterview: "08/30/2024",
        specificProjectOrTeam: "defense team",
        specificRelevantExperienceOrSkill: "web protocols, initiative taking, and passion and interest in analyzing and solving problems with innovation and experimentation",
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

const sendMail = async (interviewerEmail, positionJobTitle, emailBody) => {

    let mailOptions = {
        from: adminEmail,
        to: interviewerEmail,
        subject: `Thank You - ${positionJobTitle} Interview - ${myName}`,
        html: emailBody,
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent successfully to ${interviewerEmail}!`);
        }
    });
};

recipients.forEach((recipient) => {

    const emailBody =

        `<div>
            <p>Dear ${recipient.interviewerName},</p>
    
        <p>I hope this email finds you well. I wanted to express my sincere gratitude for the opportunity to interview for the ${recipient.positionJobTitle} position at ${recipient.companyName} on ${recipient.dateOfInterview}. It was a pleasure speaking with you and learning more about the exciting work being done by your team.</p >
        
        <p>I am even more enthusiastic about the opportunity to join ${recipient.companyName} and contribute to the ${recipient.specificProjectOrTeam}. Our conversation reinforced my belief that my background in ${recipient.specificRelevantExperienceOrSkill} aligns well with the needs of your team.</p>
        
        <p>Thank you again for your time and consideration. Please let me know if there is any additional information I can provide. I look forward to the possibility of working together.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        </div>
        `

    sendMail(recipient.interviewerEmail, recipient.positionJobTitle, emailBody);
});