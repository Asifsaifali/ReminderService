const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

const repo = new TicketRepository();

class EmailService {
  async sendBasicEmail(mailFrom, mailTo, mailSub, mailBody) {
    try {
      await sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSub,
        text: mailBody,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async createNotification(data) {
    try {
      const ticket = await repo.create(data);
      return ticket;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = EmailService;
