const { NotificationTickets } = require("../models/index");
const { Op } = require("sequelize");

class TicketRepository {
  async create(data) {
    try {
      const ticket = await NotificationTickets.create(data);
      return ticket;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const response = await NotificationTickets.findAll();
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async get(filter) {
    try {
      const response = await NotificationTickets.findAll({
        where: {
          status: filter.status,
          notificationTime: {
            [Op.lte]: new Date(),
          },
        },
      });
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      const response = await NotificationTickets.findByPk(ticketId);
      if (data.status) response.status = data.status;
      await response.save();
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketRepository;
