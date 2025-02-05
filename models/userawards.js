const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userawards', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unique_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    vAwardName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    vCompanyName: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'userawards',
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
