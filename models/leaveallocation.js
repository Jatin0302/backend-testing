const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leaveallocation', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldZealLeaveID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldUserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dStartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dEndDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    jAllocatedLeaves: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    jTakenLeaves: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    iLeaveTypeID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iTotalCL: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    iTotalPL: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    iTotalSL: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    iTotalCLTaken: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    iTotalPLTaken: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    iTotalSLTaken: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    iTotalULTaken: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'leaveallocation',
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
