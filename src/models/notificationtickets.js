'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTickets.init({
    subject: {
      type:DataTypes.STRING,
      allowNull:false
    },
    content: {
      type:DataTypes.STRING,
      allowNull:false
    },
    recepientEmail: {
      type:DataTypes.STRING,
      allowNull:false
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false,
      values:["PENDING","SUCCESS","FAILED"],
      defaultValue:"PENDING"
    },
    notificationTime:{
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'NotificationTickets',
  });
  return NotificationTickets;
};