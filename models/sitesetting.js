const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sitesetting', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vKey: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "vKey"
    },
    vLabel: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vType: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tValue: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sitesetting',
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
        name: "vKey",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "vKey" },
        ]
      },
    ]
  });
};
