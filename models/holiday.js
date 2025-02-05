const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('holiday', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vHolidayDescription: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    dDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    eIsApplySandwich: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'holiday',
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
