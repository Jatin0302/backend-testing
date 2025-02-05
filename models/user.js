const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      eType: {
        type: DataTypes.ENUM("Employee", "Client", "Contact"),
        allowNull: false,
        defaultValue: "Employee",
      },
      iRelId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      eRoleType: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment:
          "1 - Super Admin, 2 - Admin (kandarp/vishal/keyur sir), 3 - HR, 4 - Resources, NULL - Client",
      },
      iOldTableId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      vFirstName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      vLastName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      vProfileImg: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      jLastPasswords: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      remember_token: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      code: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      vAltEmailId: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      vContactNum: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      vAltContactNum: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      eNDAProtected: {
        type: DataTypes.ENUM("1", "0", ""),
        allowNull: true,
      },
      eIsAgency: {
        type: DataTypes.ENUM("1", "0", ""),
        allowNull: true,
      },
      eBillable: {
        type: DataTypes.ENUM("0", "1", ""),
        allowNull: false,
        defaultValue: "1",
      },
      eAllowLogin: {
        type: DataTypes.ENUM("1", "0"),
        allowNull: false,
        defaultValue: "0",
      },
      eDisplayDeveloperName: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
      eEmailNotification: {
        type: DataTypes.ENUM("0", "1", "7", "14", "30", ""),
        allowNull: true,
        defaultValue: "0",
      },
      vCountryName: {
        type: DataTypes.STRING(150),
        allowNull: true,
      },
      iCountryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dLastPasswordChangeDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      eEnableGoogle2fa: {
        type: DataTypes.ENUM("0", "1", ""),
        allowNull: false,
        defaultValue: "0",
      },
      vDateFormat: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: "DD-MMM-yyyy",
      },
      vDeviceType: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      vDeviceToken: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      iIsTimelogRequired: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1,
      },
      vCompanyName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      vCurrency: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      vRateType: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      fDefaultRate: {
        type: DataTypes.DOUBLE(10, 2),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user",
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
