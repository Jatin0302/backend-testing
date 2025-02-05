const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monthlyaward', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Employee Id"
    },
    dMonthYear: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    eAwardType: {
      type: DataTypes.ENUM('SOM','WOW'),
      allowNull: false,
      defaultValue: "SOM"
    }
  }, {
    sequelize,
    tableName: 'monthlyaward',
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
