const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iTeamOwnerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "User table reference"
    },
    vTeamName: {
      type: DataTypes.STRING(255),
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
    tableName: 'teams',
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
      {
        name: "iTeamOwnerId",
        using: "BTREE",
        fields: [
          { name: "iTeamOwnerId" },
        ]
      },
    ]
  });
};
