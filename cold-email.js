require('dotenv').config();

const nodemailer = require('nodemailer');

const adminEmail = process.env.ADMIN_EMAIL
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;

const myName = "firstName lastName";
const myEmail = "firstNamelastName@server.com";
const myLinkedin = "https://www.linkedin.com/in/firstName-lastName/";
const myFieldOrJobDescriptionKeywords = "customer service, SDLC, teamwork, and communication";
const myExperienceOrSkills = "JavaScript, Java, and MySQL";
const myAvailability = "Monday through Friday after 3 P.M.";

const recipients = [
    {
        hiringManagerName: "Jane Doe",
        hiringManagerEmail: "fakeEmail@server.com",
        positionJobTitle: "Software Engineer I",
        postingLink: "https://www.github.careers/careers-home/jobs/3041?lang=en-us",
        postingId: "Req ID: 3041",
        companyName: "GitHub",
        companyMissionValuesOrRecentProjects:
            "your values of customer-obsessed, ship to learn, growth mindset, own the outcome, better together, and diverse and inclusive",
    },
    {
        hiringManagerName: "Bobby Ricky",
        hiringManagerEmail: "fakeEmail2@server.com",
        positionJobTitle: "Software Engineer, Search",
        postingLink:
            "https://www.google.com/about/careers/applications/jobs/results/136201984171483846-software-engineer-search",
        postingId: "Req ID: 2024",
        companyName: "Google",
        companyMissionValuesOrRecentProjects:
            "your mission to organize the world's information and make it universally accessible and useful",
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

const sendMail = async (recipientEmail, positionTitle, emailBody) => {

    let mailOptions = {
        from: adminEmail,
        to: recipientEmail,
        subject: `Application follow-up for ${positionTitle} position - ${myName}`,
        html: emailBody,
        attachments: [{
            filename: "fileName.pdf",
            path: "users/document/folder/fileName.pdf",
            contentType: "application/pdf"
        }]
    };

    transporter.sendMail(mailOptions, function (error) {
        if (error) {
            console.log(error);
        } else {
            console.log(`Email sent successfully to ${recipientEmail}!`);
        }
    });
};

recipients.forEach((recipient) => {

    const emailBody =

        `<div>
            <p>Dear ${recipient.hiringManagerName},</p>
    
        <p>I hope this message finds you well. My name is ${myName}, and I recently applied for the ${recipient.positionJobTitle} position (<a href="${recipient.postingLink}">${recipient.postingId}</a>) at ${recipient.companyName}. I am very excited about the opportunity to contribute to your team and would love to further discuss how my background in ${myFieldOrJobDescriptionKeywords} aligns with the needs of ${recipient.companyName}.</p >
        
        <p>I am particularly drawn to ${recipient.companyName} because of ${recipient.companyMissionValuesOrRecentProjects}. I believe my experience in ${myExperienceOrSkills} would be a valuable asset to your team.</p>
        
        <p>I have attached my resume for your review and would appreciate the opportunity to discuss my application in more detail. I am available ${myAvailability}, but I am flexible and willing to accommodate your schedule.</p>
        
        <p>Thank you for considering my application. I look forward to the possibility of speaking with you soon.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        </div>
        `

    sendMail(recipient.hiringManagerEmail, recipient.positionJobTitle, emailBody)
});