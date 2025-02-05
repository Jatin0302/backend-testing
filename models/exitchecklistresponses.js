const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exitchecklistresponses', {
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
    iAnswerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vAnswer: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    iParentStepId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exitchecklistresponses',
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
