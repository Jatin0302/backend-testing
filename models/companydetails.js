const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('companydetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vName: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    iAccountNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vAddressLine1: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    vAddressLine2: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    vCity: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vState: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vZipcode: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    iCountryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vEmail: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    vPhone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vFax: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vWebsite: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vLogo: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    vOwnerName: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    vOwnerPosition: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    vIECNumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    dIECDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vCINNumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    vGSTNumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    vSoftexRegistrationNumber: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    dSoftexRegistrationDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    wireNote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    checkoutNote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    paypalNote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stripeNote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    localNote: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eRegisterType: {
      type: DataTypes.ENUM('STPI','KASEZ'),
      allowNull: true
    },
    vSignImage: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'companydetails',
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
      {
        name: "i_country_id",
        using: "BTREE",
        fields: [
          { name: "iCountryId" },
        ]
      },
    ]
  });
};
