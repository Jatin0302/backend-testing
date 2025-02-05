const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptionmaster', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iPrimaryUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iSecondaryUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eType: {
      type: DataTypes.ENUM('public','private'),
      allowNull: false,
      defaultValue: "public"
    },
    vName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vPurpose: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vURL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dPurchaseDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    eStatus: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      comment: "0='InActive',1='Active',2='Trial'"
    },
    eRenewalType: {
      type: DataTypes.ENUM('0','1','2','3','4'),
      allowNull: true,
      defaultValue: "0",
      comment: "0='Free',1='One-Time',2='Monthly',3='Quarterly',4='Yearly'"
    },
    dRenewalDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eAutoRenew: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0",
      comment: "0='No',1='Yes'"
    },
    eFree: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1",
      comment: "0='Paid',1='Free'"
    },
    dSubscriptionAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ePaymentStatus: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    },
    iCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscriptionmaster',
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
