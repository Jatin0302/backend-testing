const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usereducation', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unique_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    vCourseName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    vInstituteName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vInstituteLocation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eIsCompleted: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1"
    },
    dEndingYearMonth: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usereducation',
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
