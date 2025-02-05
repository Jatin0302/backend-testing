const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empreportingperson', {
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
    iReportingPersonId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eIsDottedLineReportingPerson: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'empreportingperson',
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
      {
        name: "iReportingPersonId",
        using: "BTREE",
        fields: [
          { name: "iReportingPersonId" },
        ]
      },
    ]
  });
};
