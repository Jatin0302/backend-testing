const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobapplicantreference', {
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
    vName: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vPhoneNumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vCurDesignation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vExperienceYear: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    vExperienceMonth: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobapplicantreference',
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
