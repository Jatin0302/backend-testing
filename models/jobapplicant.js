const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobapplicant', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iJobOpeningId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vFirstName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vLastName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vEmail: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vPhone: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vAlternatePhone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vAccessToken: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eEmailVerified: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    },
    ePhoneVerified: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    },
    iEnglishProficiency: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    iCurrentCTCMonthly: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iCurrentCTCMonthlyOnHand: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iExpectedCTCMonthly: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iNoticePeriodDays: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vTotalExperience: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vRelevantExperience: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vChangeReason: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    eAppliedBefore: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "0"
    },
    vAppliedBeforeMonths: {
      type: DataTypes.STRING(11),
      allowNull: false,
      comment: "Not Shortlisted \/ 0- 6 months \/ 6-12 months \/ 1-2 Years \/ 2+ Years"
    },
    ePresentSalarySlip: {
      type: DataTypes.ENUM('1','0','2'),
      allowNull: true,
      defaultValue: "1",
      comment: "0-no\/1-yes\/2-fresher"
    },
    eBondReady: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    },
    vBondReadyNoReason: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    eOptinForPF: {
      type: DataTypes.ENUM('Yes','No','Mandatory'),
      allowNull: false,
      defaultValue: "Yes"
    },
    vRemarks: {
      type: DataTypes.STRING(2000),
      allowNull: true
    },
    vResume: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iRound0InterviewHR: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iRound1Interviewer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vRound2Interviewer: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    iRound3Interviewer: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dRound1DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dRound2DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dRound3DateTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    vInterviewRound: {
      type: DataTypes.STRING(100),
      allowNull: false,
      comment: "HR Round, 1st Round, 2nd Round, Final Round, Discussion"
    },
    eInterviewLocation: {
      type: DataTypes.ENUM('Virtual','In-Office'),
      allowNull: false,
      defaultValue: "Virtual"
    },
    vStatus: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Shortlisted",
      comment: "Shortlisted, On Hold, Offer Given, Offer Accepted, Rejected, Not Appeared"
    },
    vReferredBy: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vReferredByOther: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    iReferredByEmpId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iPackageOfferedMonthly: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dTentativeJoiningDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobapplicant',
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
