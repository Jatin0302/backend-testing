const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('leavetype', {
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
    vCode: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    eType: {
      type: DataTypes.ENUM('Paid','Unpaid'),
      allowNull: false
    },
    vColorCode: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    iMaxAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eStatus: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'leavetype',
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
