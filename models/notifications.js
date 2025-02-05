const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
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
    iDeptId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    eIsRead: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0 = unread, 1 = read"
    },
    iRelId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vMsg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vImage: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'notifications',
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
