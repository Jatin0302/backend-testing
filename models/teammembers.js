const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teammembers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "User table reference"
    },
    iTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Teams table reference"
    },
    dMonth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    iTeamHours: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      comment: "Team Hours in minutes"
    },
    iProjectIds: {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "Ids comma separate like \"2\",\"4\",\"6\""
    },
    isRecurring: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
      comment: "If it is a recurring event, it will automatically generate a record on the 1st day of each month."
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "user table reference"
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "user table reference"
    }
  }, {
    sequelize,
    tableName: 'teammembers',
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
        name: "iUserId",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
        ]
      },
      {
        name: "iTeamId",
        using: "BTREE",
        fields: [
          { name: "iTeamId" },
        ]
      },
      {
        name: "iUserId_2",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
        ]
      },
      {
        name: "iTeamId_2",
        using: "BTREE",
        fields: [
          { name: "iTeamId" },
        ]
      },
      {
        name: "iCreatedBy",
        using: "BTREE",
        fields: [
          { name: "iCreatedBy" },
        ]
      },
      {
        name: "iUpdatedBy",
        using: "BTREE",
        fields: [
          { name: "iUpdatedBy" },
        ]
      },
    ]
  });
};
