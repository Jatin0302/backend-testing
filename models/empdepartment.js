const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empdepartment', {
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
    iDeptId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empdepartment',
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
        name: "FK_tb_UserSubDepartment_tb_User",
        using: "BTREE",
        fields: [
          { name: "iUserId" },
        ]
      },
      {
        name: "FK_tb_UserSubDepartment_tb_Department",
        using: "BTREE",
        fields: [
          { name: "iDeptId" },
        ]
      },
    ]
  });
};
