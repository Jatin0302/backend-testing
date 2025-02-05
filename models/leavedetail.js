const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leavedetail', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldLeaveDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldLeaveDetailsId"
    },
    iLeaveID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldLeaveId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dLeaveDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    eHalfDay: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    tHalfDayStartTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    ePreLunchHalfDay: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ePostLunchHalfDay: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    eLeaveType: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    iLeaveTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eSandwich: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'leavedetail',
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
        name: "iOldLeaveDetailsId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldLeaveDetailsId" },
        ]
      },
      {
        name: "iLeaveID",
        using: "BTREE",
        fields: [
          { name: "iLeaveID" },
        ]
      },
    ]
  });
};
