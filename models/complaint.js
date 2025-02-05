const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('complaint', {
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
    iOfficeNum: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vTitle: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vDescription: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vPhotoVideo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dIncidentDateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    eAssignToDepartment: {
      type: DataTypes.ENUM('Administration','Human Resource','System & Network Administration'),
      allowNull: false,
      defaultValue: "Administration"
    },
    dEstimatedDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('Pending','In Progress','Resolved','Rejected','Cancelled'),
      allowNull: false,
      defaultValue: "Pending"
    },
    iStatusUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Mention UserId!\r\n"
    },
    vRejectedReason: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    vResolvedComment: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    dCompletedDateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vCancelledReason: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'complaint',
    timestamps: true,
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
