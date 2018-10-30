'use strict';
module.exports = (sequelize, DataTypes) => {
  const sms = sequelize.define('sms', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    sender: {
      type: DataTypes.STRING(50)
    },
    to_phone: {
      type: DataTypes.STRING(50)
    },
    content: {
      type: DataTypes.TEXT
    },
    to_shop: {
      type: DataTypes.STRING(50)
    },
    tranId: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING(30)
    },
    triesSent: {
      type: DataTypes.INTEGER
    },
    provider: {
      type: DataTypes.STRING(50)
    },
    response: {
      type: DataTypes.JSON
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, {});
  sms.associate = function (models) {
    sms.hasMany(models.integrations);
    sms.hasMany(models.providers)
  };

  sms.prototype.toJson = () => {
    let { id, sender, to_phone, content, to_shop, status } = this.dataValues;
    return { id, sender, to_phone, content, to_shop, status };
  }

  return sms;
};