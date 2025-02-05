const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectemp', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldUserProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldUserProjectId"
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iMasterProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldMasterProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iMergedProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eDisplayInResume: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0"
    },
    tResumeDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projectemp',
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
        name: "iOldUserProjectId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldUserProjectId" },
        ]
      },
    ]
  });
};
