const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exitinterviewanswers', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iExitQuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vQuestionName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vQuestionType: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exitinterviewanswers',
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
