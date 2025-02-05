const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobapplicantemphistory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iJobApplicantId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vDurationFromTo: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vCompanyName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    iSalary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vReasonForLeaving: {
      type: DataTypes.STRING(1000),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobapplicantemphistory',
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
