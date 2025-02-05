const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptionpaymentdetails', {
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
    iUsersCount: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dPricePerUser: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    dStartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ePaymentType: {
      type: DataTypes.ENUM('1','2','3'),
      allowNull: true,
      comment: "1='Credit\/debit',2='Net Banking',3='PayPal'"
    },
    vBankName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vCardHolderName: {
      type: DataTypes.STRING(255),
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
    tableName: 'subscriptionpaymentdetails',
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
