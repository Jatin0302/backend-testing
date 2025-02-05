const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('timelog', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldTimeLogId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldTimeLogId"
    },
    vTaskName: {
      type: DataTypes.STRING(1200),
      allowNull: true
    },
    iClientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dStartTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dEndTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dLogDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vTaskDescription: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    iTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iMasterTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vTaskAssignedBy: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vStatus: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    iHours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iBillableHours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    iProjectTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldProjectTaskId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iProjectTaskPlanId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldProjectTaskPlanId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dApproveTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ApproveHours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldApprovedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iAssignBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldAssignBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iTagParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    },
    ApproverNote: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    eBillableStatus: {
      type: DataTypes.ENUM('pending','billed','paid'),
      allowNull: true,
      defaultValue: "pending",
      comment: "pending, billed, paid"
    },
    isTaggedEntry: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0",
      comment: "This column indicates that whether the timelog record is tagged or not."
    },
    iMergedProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eWorkShift: {
      type: DataTypes.ENUM('Day','Night','DayNight'),
      allowNull: true,
      defaultValue: "Day"
    },
    eUpdatedAfterApproval: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'timelog',
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
        name: "iOldTimeLogId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldTimeLogId" },
        ]
      },
      {
        name: "<Name of Missing Index, sysname,>",
        using: "BTREE",
        fields: [
          { name: "dEndTime" },
          { name: "iUserId" },
          { name: "dStartTime" },
        ]
      },
      {
        name: "NCI_tb_TimeLog_hrs_name",
        using: "BTREE",
        fields: [
          { name: "iProjectTaskId" },
          { name: "vTaskName", length: 255 },
          { name: "iHours" },
        ]
      },
      {
        name: "NCI_tb_TimeLog_hrs_id",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
          { name: "iHours" },
          { name: "iProjectTaskId" },
        ]
      },
      {
        name: "<tb_TimeLog_dEndTime, sysname,>",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
          { name: "dEndTime" },
        ]
      },
      {
        name: "<tb_TimeLog_dStartTime_bHours, sysname,>",
        using: "BTREE",
        fields: [
          { name: "iProjectId" },
          { name: "iUserId" },
          { name: "dStartTime" },
          { name: "iHours" },
        ]
      },
      {
        name: "<tb_TimeLog_dStartTime_bHours_iUserId, sysname,>",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
          { name: "dStartTime" },
          { name: "iHours" },
        ]
      },
      {
        name: "<tb_TimeLog_iProjectId_iUserId_bHours, sysname,>",
        using: "BTREE",
        fields: [
          { name: "iProjectId" },
          { name: "iUserId" },
          { name: "iHours" },
        ]
      },
      {
        name: "<tb_TimeLog_iUserId_dStartTime_dEndTime_bHours, sysname,>",
        using: "BTREE",
        fields: [
          { name: "iProjectId" },
          { name: "iUserId" },
          { name: "dStartTime" },
          { name: "dEndTime" },
          { name: "iHours" },
        ]
      },
      {
        name: "FK_tb_TimeLog_tb_Client",
        using: "BTREE",
        fields: [
          { name: "iClientId" },
        ]
      },
      {
        name: "IX_Project",
        using: "BTREE",
        fields: [
          { name: "iProjectId" },
        ]
      },
      {
        name: "iTaskId",
        using: "BTREE",
        fields: [
          { name: "iTaskId" },
        ]
      },
      {
        name: "iTaskId_2",
        using: "BTREE",
        fields: [
          { name: "iTaskId" },
        ]
      },
      {
        name: "iApprovedBy",
        using: "BTREE",
        fields: [
          { name: "iApprovedBy" },
        ]
      },
      {
        name: "iAssignBy",
        using: "BTREE",
        fields: [
          { name: "iAssignBy" },
        ]
      },
      {
        name: "vTaskAssignedBy",
        using: "BTREE",
        fields: [
          { name: "vTaskAssignedBy" },
        ]
      },
    ]
  });
};
