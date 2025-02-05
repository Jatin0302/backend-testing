const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documents', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vDocumentName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vDocumentType: {
      type: DataTypes.STRING(50),
      allowNull: true,
      comment: "Leave Policy, Handbook, COSEC"
    },
    vUrlOrFile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vDocumentFile: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vExternalUrl: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vFinancialYear: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vIcon: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('active','inactive'),
      allowNull: false,
      defaultValue: "inactive"
    }
  }, {
    sequelize,
    tableName: 'documents',
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
