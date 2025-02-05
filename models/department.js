const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('department', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iParentDeptId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    iOldDeptId_Temp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldSubDepId_Temp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vDeptName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vDeptEmailId: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
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
