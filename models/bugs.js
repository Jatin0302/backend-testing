const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugs', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iClientID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iProjectID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iBugParentId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vTag: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vStatus: {
      type: DataTypes.ENUM('Open','In Progress','Not an Issue','Not Reproducible','Missing Information','Ready for Retest','Re-Open','Closed','Fixed','On Hold','Duplicate Bug'),
      allowNull: false
    },
    vPriority: {
      type: DataTypes.ENUM('Low','Medium','High','Critical'),
      allowNull: false
    },
    vSeverity: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    iVerifiedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dRegisterDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    vBugType: {
      type: DataTypes.ENUM('404','Design','Logical','Syntax','Functionality','Suggestion'),
      allowNull: false
    },
    dEditDate: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    lLink: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dDueDate: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    iAssignedTo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iSuperAdminID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bugs',
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
