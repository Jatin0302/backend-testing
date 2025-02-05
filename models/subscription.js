const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscription', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eType: {
      type: DataTypes.ENUM('Public','Private'),
      allowNull: false,
      defaultValue: "Public"
    },
    vPurpose: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    vName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    eStatus: {
      type: DataTypes.ENUM('Active','Discontinued','Deactivated','Expired','Inactive'),
      allowNull: false,
      defaultValue: "Active"
    },
    vURL: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    vUsername: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vPassword: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vPhone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vPin: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    dDebitDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eBillingFrequency: {
      type: DataTypes.ENUM('One-Time','Yearly','Monthly'),
      allowNull: false,
      defaultValue: "One-Time"
    },
    fAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    vCurrency: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ePaymentType: {
      type: DataTypes.ENUM('Credit-Card','Debit-Card','Bank-Transfer'),
      allowNull: false,
      defaultValue: "Credit-Card"
    },
    iLast4Digits: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iEmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'subscription',
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
