const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('monthlyawardnomination', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dMonthYear: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    eAwardType: {
      type: DataTypes.ENUM('SOM','WOW'),
      allowNull: false
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iAuthId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vNote: {
      type: DataTypes.STRING(5000),
      allowNull: false
    },
    iSubmittedByUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'monthlyawardnomination',
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
