const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ticketmeta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eMetaType: {
      type: DataTypes.ENUM('type','status'),
      allowNull: false
    },
    vName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ticketmeta',
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
