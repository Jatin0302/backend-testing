const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptioncredentials', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iSubscriptionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iPrimaryUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iSecondaryUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vEmail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vPhoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vUserName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vPassword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eTwoFactorAuth: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0='No',1='Yes'"
    },
    iAuthUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscriptioncredentials',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
