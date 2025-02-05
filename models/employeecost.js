const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employeecost', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hourlyCost: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "user table reference"
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "user table reference"
    }
  }, {
    sequelize,
    tableName: 'employeecost',
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
