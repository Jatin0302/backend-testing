const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employee', {
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
    eGender: {
      type: DataTypes.ENUM('Male','Female'),
      allowNull: true
    },
    vAddressPermanent: {
      type: DataTypes.STRING(5000),
      allowNull: true
    },
    vAddressCurrent: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    dBirthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dJoiningDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dLeavingDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    iDesignationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vMobileUDID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vProfileImage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dWorkingStartTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    dWorkingEndTime: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    vTotalWorkingHours: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: "8:30"
    },
    tHalfDayReminderTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    tEndOfDayReminderTime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    vSkypeUserName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vLinkedIn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    bExternalAccess: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    PAYCODE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iGradeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iBandId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vPayrollEmployeeID: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    eRemoteWorking: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "0: Office, 1: Remote"
    },
    iOfficeNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eAvailability: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0",
      comment: "Not Googling, Googling"
    },
    EmergencyContactNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Dietary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    StayingAt: {
      type: DataTypes.ENUM('PG','Home'),
      allowNull: true
    },
    ModeofTransport: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    VehicleNo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TshirtSize: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Marital: {
      type: DataTypes.ENUM('Married','Unmarried'),
      allowNull: true
    },
    Hobbies: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Sports: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    BloodGroup: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NGO: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true
    },
    vVaccineDose: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vVaccineDoseCertificate: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    eTakenVaccine: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true
    },
    dLastAppraisalDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    vEmergencyContactNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    vDietary: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    eStayingAt: {
      type: DataTypes.ENUM('PG','Home'),
      allowNull: true
    },
    vModeOfTransport: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vVehicleNo: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vTshirtSize: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    eMaritalStatus: {
      type: DataTypes.ENUM('Married','Unmarried'),
      allowNull: true
    },
    jHobbies: {
      type: DataTypes.JSON,
      allowNull: true
    },
    jSports: {
      type: DataTypes.JSON,
      allowNull: true
    },
    vBloodGroup: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    bBloodDonor: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true
    },
    eNGOConnection: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true
    },
    jAwards: {
      type: DataTypes.JSON,
      allowNull: true
    },
    jBeverageType: {
      type: DataTypes.JSON,
      allowNull: true
    },
    vSpouseName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vSpouseContactNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    eNoOfChild: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true
    },
    jChildDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    jNotificationSetting: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eNoticePeriod: {
      type: DataTypes.ENUM('1','2'),
      allowNull: false,
      defaultValue: "2",
      comment: "1=Yes, 2=No"
    },
    vEducationQualification: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vTotalExperienceMonth: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    vTotalExperienceYear: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    dCareerStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tProfessionalSummary: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    teamName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eWorkShift: {
      type: DataTypes.ENUM('Day','Night','Day-Night'),
      allowNull: true,
      defaultValue: "Day"
    }
  }, {
    sequelize,
    tableName: 'employee',
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
        name: "iUserId",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
        ]
      },
    ]
  });
};
