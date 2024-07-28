## 📋 <a name="table">Table of Contents</a>

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Quick Start](#quick-start)
5. [Code Snippets to Copy](#snippets)
6. [Documents](#links)
7. [Challenges and Successes](#challengesAndSuccesses)
8. [More](#more)

## <a name="introduction">Introduction</a>

<p>Built with Node.js, these email scripts are designed to streamline your job hunt and make the process more efficient.</p>

<p>Saw a few companies you want to apply to but want to know what their culture is like? Use the culture email script to get insights directly from the source.</p>

<p>Need to send cold emails after applying to several jobs? No problem! Just enter the necessary information and BAM! Several emails are sent in a matter of seconds.</p>

<p>Landed an interview and want to send a thank you email? There's a script for that too.</p>

<p>Has it been weeks since your last communication after an interview? Utilize the follow-up email script to check in.</p>

<p>Networking like crazy? Don't worry! The networking email script makes it easy.</p>

<p>Need a referral from a coffee chat? Let's get you that referral with a customized script!</p>

<p>With fully customizable code, I've done most of the heavy lifting for you. Now go out there and make me proud by landing that dream job of yours!</p>

## <a name="tech-stack">Tech Stack</a>

- Node.js
- Nodemailer
- node-cron

## <a name="features">Features</a>

👉 **Customizable email scripts**: Customize these scripts to your liking. It's easy to do!

👉 **Automated Emails**: Some scripts integrates node-cron to send periodic emails without you lifting a finger after the initial setup.

## <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Nodemailer](https://nodemailer.com/)
- [node-cron](https://www.npmjs.com/package/node-cron)

**Cloning the Repository**

```bash
git clone https://github.com/AvionShea/email-scripts.git
cd email-scripts
```

**Installation**

Install the project dependencies using npm:

```bash
npm i nodemailer dotenv node-cron
```

**Running the Project**

```bash
npm run cold
npm run thanks
npm run followup
npm run network
npm run coffee
```

- npm run cold: "node cold-email.js",
- npm run thanks: "node thank-you.js",
- npm run followup: "node follow-up.js",
- npm run network: "node networking.js",
- npm run coffee: "node coffee-chat.js"

Feel free to change script names to match your preference.

## <a name="snippets">Snippets</a>

<details>
<summary><code>Recipients</code></summary>

```javascript
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
```

</details>

## <a name="links">Docs</a>

**Docs**

- [How to run Cron Jobs in Node.js?](https://www.geeksforgeeks.org/how-to-run-cron-jobs-in-node-js/amp/)
- [How to send email with Nodemailer using Gmail account in Node?](https://www.geeksforgeeks.org/how-to-send-email-with-nodemailer-using-gmail-account-in-node-js/amp/)

## <a name="challengesAndSuccesses">Challenges and Successes</a>

**Challenges I overcame**

- Sending individual emails.

**Successes**

- Broke code.
- Brought ideas to life.
- Utilized resources to help find solutions.
- Learned a better understanding of forEach and map.

## <a name="more">Author</a>

- LinkedIn - [@avion-cobb](https://www.linkedin.com/in/avion-cobb/)
- Twitter - [@Blvck_Lotus003](https://twitter.com/Blvck_Lotus003)
