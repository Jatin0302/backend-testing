const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptionhistory', {
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
    eType: {
      type: DataTypes.ENUM('public','private'),
      allowNull: false
    },
    dStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      comment: "subscription start date"
    },
    dEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "subscription end date"
    },
    eStatus: {
      type: DataTypes.ENUM('0','1','2'),
      allowNull: false,
      comment: "0='InActive',1='Active',2='Trial'"
    },
    eAutoRenew: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0='No',1='Yes'"
    },
    dSubscriptionAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    iCurrencyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iUsersCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dPricePerUser: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ePaymentType: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: true,
      comment: "1='Credit\/debit',2='Net Banking',3='PayPal'\t"
    },
    vCardHolderName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vBankName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iAccountLastFourDigit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eCardType: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: true,
      comment: "1='Visa',2='RuPay',3='MasterCard'"
    },
    iCardLastFourDigit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dFromDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dToDate: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'subscriptionhistory',
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
