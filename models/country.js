const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vCountryName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vCountryCode: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    iMarketSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Market size for the country"
    }
  }, {
    sequelize,
    tableName: 'country',
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
