const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grade', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iGrade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eStatus: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'grade',
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
