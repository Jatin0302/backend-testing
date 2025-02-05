const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userpermission', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iRelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eType: {
      type: DataTypes.ENUM('Role','User'),
      allowNull: false,
      comment: "Role: iRelID -> role id, User: iRelID -> user id"
    },
    iModuleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iAdd: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    iEdit: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    iDelete: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    iView: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'userpermission',
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
        name: "iRelId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iRelId" },
          { name: "eType" },
          { name: "iModuleId" },
        ]
      },
    ]
  });
};
