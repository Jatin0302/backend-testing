const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobopening', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iDeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iSubDeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iNumOfPosition: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eJobType: {
      type: DataTypes.ENUM('FullTime','PartTime'),
      allowNull: false
    },
    eLocation: {
      type: DataTypes.ENUM('Office','Remote','Hybrid'),
      allowNull: false
    },
    dPreferredStartDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    eRecruitmentReason: {
      type: DataTypes.ENUM('NewPosition','ReplacementPosition'),
      allowNull: false
    },
    iMinSalary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iMaxSalary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vEducation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vRelevantExperience: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vTotalExperience: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eNoticePeriod: {
      type: DataTypes.ENUM('0','15','30','45','60','90'),
      allowNull: false
    },
    iEnglishProficiency: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    vPreferredInterviewDays: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vPreferredInterviewTime: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    iNumOfRound: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    iRound1Interviewer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vRound2Interviewer: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    iRound3Interviewer: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vRemarks: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobopening',
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
