const sender = require("../config/emailConfig");
const EmailService = require("../services/email-service");
const cron =require('node-cron')


const service = new EmailService();

const setupJobs=()=>{
cron.schedule("*/2 * * * *", async () => {
  const response = await service.fetchPendingEmails();
  response.forEach((email) => {
    sender.sendMail({
      to: email.recepientEmail,
      subject: email.subject,
      text: email.content,
    }),
      async (err, data) => {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
          await service.updateEmails(email.id, { status: "SUCCESS" });
        }
      };
  });
  console.log(response)
});
}

module.exports=setupJobs;
