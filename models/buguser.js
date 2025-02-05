const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('buguser', {
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
      allowNull: false
    },
    vBugType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    iBugNoteID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'buguser',
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
