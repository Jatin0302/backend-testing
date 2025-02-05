const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projecttask', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldProjectTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldProjectTaskId"
    },
    iClientId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iMasterTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vProjectTask: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vHours: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOrderId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iTaskTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsRecurring: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    DateRange: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Day: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Time: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    dFromDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dToDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vFromTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vToTime: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    dDueDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    iMergedProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vClickupTaskId: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projecttask',
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
        name: "iOldProjectTaskId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldProjectTaskId" },
        ]
      },
      {
        name: "iClientId",
        using: "BTREE",
        fields: [
          { name: "iClientId" },
        ]
      },
      {
        name: "iProjectId",
        using: "BTREE",
        fields: [
          { name: "iProjectId" },
        ]
      },
      {
        name: "iMasterTaskId",
        using: "BTREE",
        fields: [
          { name: "iMasterTaskId" },
        ]
      },
      {
        name: "iTaskTypeId",
        using: "BTREE",
        fields: [
          { name: "iTaskTypeId" },
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
