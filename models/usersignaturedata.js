const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usersignaturedata', {
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
    vTagLine: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vWebsite: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    vLinkedin: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vFacebook: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vWhatsApp: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vSkype: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vInstagram: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vTwitter: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vYoutube: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    Github: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vBrandLogo: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vLinkText: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vLinkUrl: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vMeetUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usersignaturedata',
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
        name: "userId",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
        ]
      },
    ]
  });
};
