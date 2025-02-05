const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('useraddressbook', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    unique_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vAddressLabel: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vAddressLine1: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    vAddressLine2: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    vCity: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vState: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vCountry: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vPostcode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eDefault: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      comment: "0 = No, 1 = Yes"
    },
    eType: {
      type: DataTypes.ENUM('1','2'),
      allowNull: true,
      comment: "1 = Permanent, 2 = Local"
    },
    eStatus: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      comment: "0 = Inactive, 1 = Active"
    },
    vlatitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vlongitude: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tGoogleMapUrl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eSameCurrentAddress: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      comment: "'0'=> false, \"1\"=>true"
    }
  }, {
    sequelize,
    tableName: 'useraddressbook',
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
