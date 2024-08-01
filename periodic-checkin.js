require('dotenv').config();

const nodemailer = require('nodemailer');

const cron = require('node-cron');
const deliveryFrequency = "0 15 1 3,6,9,12 *"; //Cron schedule - quarterly check-in on first of the month

const adminEmail = process.env.ADMIN_EMAIL;
const adminEmailPassword = process.env.ADMIN_EMAIL_PASSWORD;

const myName = "firstName lastName";
const myEmail = "firstNamelastName@server.com";
const myLinkedin = "https://www.linkedin.com/in/firstName-lastName/";

const recipients = [
    {
        contactName: "Jane Doe",
        contactEmail: "fakeEmail@server.com",
        brieflyDescribeRecentProjectsAchievementsOrChangesInProfessionalLife: "recently hired at Google as a Software Engineer I",
        specificSkillOrIndustryTopic: "Ruby on Rails",
        articleLink: "https://dev.to/blackgirlbytes/how-to-learn-in-public-1coh",
        articleTitle: "How to learn in public",
        specificTopicYouDiscussedBefore: "ways for your work to be seen",
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
        subject: `Checking In and Sharing Updates`,
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
    
        <p>I hope this message finds you well. It's been a little while since we last connected, and I wanted to reach out to see how you're doing and share some updates on my end.</p >
        
        <p>Since we last spoke, I've been ${recipient.brieflyDescribeRecentProjectsAchievementsOrChangesInProfessionalLife}. It's been an exciting time, and I've learned a lot, especially about ${recipient.specificSkillOrIndustryTopic}.</p>
        
        <p>I would love to hear how things have been going for you. What projects or initiatives are you currently working on? Are there any recent developments or achievements you'd like to share?</p>

        <p>Additionally, I came across ${recipient.anArticleEventOrResource} that I thought might be of interest to you: <a href="${recipient.articleLink}}">${recipient.articleTitle}</a>. It reminded me of our conversation about ${recipient.specificTopicYouDiscussedBefore}.</p>

        <p>Looking forward to catching up and hearing more about what you’ve been up to. Please feel free to suggest a time if you'd like to chat further.</p>
        
        <p>Best regards,</p>
        <p>${myName}</p>
        <p>${myLinkedin}</p>
        <p>${myEmail}</p>
        </div>
        `

    sendMail(recipient.contactEmail, emailBody);
});

cron.schedule(deliveryFrequency, sendMail);

console.log(`Periodic Check-In scheduled with frequency: ${deliveryFrequency}`);