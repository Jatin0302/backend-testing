const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: "iOldProjectId"
    },
    vProjectName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    iClientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iOldClientId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    iEstimatedHours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dLiveDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vProjDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    iProjectTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iTechnologyId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vProjectIntegration: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    vFTPDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vDatabaseDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vControlpaneldetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vGitURL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eEmailnotify: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    },
    vReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dDeadlinedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    eQARequired: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    },
    eNDAProtected: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    },
    iIndustryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vSuggestions: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dProjectCostInRupees: {
      type: DataTypes.DECIMAL(18,5),
      allowNull: true
    },
    vProjectCostUserHour: {
      type: DataTypes.JSON,
      allowNull: true
    },
    dProjectCostUdatedDate: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    dClientTimelogStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: "2022-01-01"
    },
    bAutoApproveTimelog: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    },
    eBillable: {
      type: DataTypes.ENUM('0','1',''),
      allowNull: false,
      defaultValue: "1"
    },
    iMasterProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vClickupSpaceId: {
      type: DataTypes.STRING(155),
      allowNull: true
    },
    last_url_sync_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    url_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'project',
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
        name: "iOldProjectId",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "iOldProjectId" },
        ]
      },
      {
        name: "FK_tb_Project_tb_Client",
        using: "BTREE",
        fields: [
          { name: "iClientId" },
        ]
      },
    ]
  });
};
