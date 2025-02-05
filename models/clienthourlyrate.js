const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clienthourlyrate', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    iClientId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    unique_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fRate: {
      type: DataTypes.DOUBLE(10,2),
      allowNull: true,
      defaultValue: 0.00
    },
    added_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'clienthourlyrate',
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
