const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('generalcompany', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cmp_name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: "cmp_name"
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'generalcompany',
    timestamps: false,
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
        name: "cmp_name",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cmp_name" },
        ]
      },
    ]
  });
};
