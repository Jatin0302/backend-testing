const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questionform', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vTitle: {
      type: DataTypes.STRING(300),
      allowNull: false,
      comment: "Unique"
    },
    vDesc: {
      type: DataTypes.STRING(10000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'questionform',
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
