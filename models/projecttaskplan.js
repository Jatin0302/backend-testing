const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projecttaskplan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldUserProjectTaskID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldUserProjectTaskID"
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iProjectTaskID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AssignedDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    BookedHours: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projecttaskplan',
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
        name: "iOldUserProjectTaskID",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldUserProjectTaskID" },
        ]
      },
      {
        name: "FK_UserProjectTask_tb_ProjectTask",
        using: "BTREE",
        fields: [
          { name: "iProjectTaskID" },
        ]
      },
    ]
  });
};
