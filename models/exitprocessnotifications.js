const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exitprocessnotifications', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iParentStepId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iAssignBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iAssignTo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dAddedDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('Pending','Completed'),
      allowNull: false,
      defaultValue: "Pending"
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exitprocessnotifications',
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
