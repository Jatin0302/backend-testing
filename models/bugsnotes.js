const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugsnotes', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iBugID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUserID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vNotes: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vPrevStatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vNewStatus: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dUpdatedDate: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    dAddedDate: {
      type: DataTypes.DATE(6),
      allowNull: true
    },
    iSuperAdmin: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bugsnotes',
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
