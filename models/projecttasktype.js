const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projecttasktype', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iProjectTaskId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iTaskTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'projecttasktype',
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
        name: "iProjectTaskId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iProjectTaskId" },
          { name: "iTaskTypeId" },
        ]
      },
      {
        name: "iProjectTaskId_2",
        using: "BTREE",
        fields: [
          { name: "iProjectTaskId" },
        ]
      },
      {
        name: "iTaskTypeId",
        using: "BTREE",
        fields: [
          { name: "iTaskTypeId" },
        ]
      },
    ]
  });
};
