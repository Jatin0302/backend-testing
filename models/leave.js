const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leave', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldLeaveId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldLeaveId"
    },
    iUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dFromDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dToDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dResumeDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    vReason: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    vProjectsWorkingOn: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fTotalLeaveDays: {
      type: DataTypes.DECIMAL(18,1),
      allowNull: true
    },
    vLeaveApprovers: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vApprovedByIds: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vRejectedByIds: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    jRejectByIdsReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vAuthorizedBy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('1','2','3','4'),
      allowNull: true,
      defaultValue: "3",
      comment: "1=Approved,2=Rejected,3=PendingByApprover,4=PendingByAdmin"
    }
  }, {
    sequelize,
    tableName: 'leave',
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
        name: "iOldLeaveId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldLeaveId" },
        ]
      },
      {
        name: "FK_Leave_tb_User",
        using: "BTREE",
        fields: [
          { name: "iUserID" },
        ]
      },
      {
        name: "iUserID",
        using: "BTREE",
        fields: [
          { name: "iUserID" },
        ]
      },
    ]
  });
};
