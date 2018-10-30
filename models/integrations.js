'use strict';
module.exports = (sequelize, DataTypes) => {
  const integrations = sequelize.define('integrations', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING(50)
    },
    token: {
      type: DataTypes.STRING
    },
    isActive: {
      type: DataTypes.BOOLEAN
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
  integrations.associate = function (models) {
    // associations can be defined here
  };
  return integrations;
};