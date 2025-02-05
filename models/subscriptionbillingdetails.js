const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subscriptionbillingdetails', {
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
    vVendorCompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vAddressLine1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vAddressLine2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vCity: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vState: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vZipCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iCountryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iCompanyId: {
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
    tableName: 'subscriptionbillingdetails',
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
