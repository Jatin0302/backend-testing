const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projecttaskemp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldProjectTaskUserId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldProjectTaskUserId"
    },
    iProjectTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projecttaskemp',
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
        name: "iOldProjectTaskUserId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldProjectTaskUserId" },
        ]
      },
      {
        name: "iProjectTaskId",
        using: "BTREE",
        fields: [
          { name: "iProjectTaskId" },
        ]
      },
      {
        name: "iUserId",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
        ]
      },
    ]
  });
};
