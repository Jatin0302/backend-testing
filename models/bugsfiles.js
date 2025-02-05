const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugsfiles', {
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
    lFileName: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    iProjectID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iNoteID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lFilePath: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tdeleted: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    iOldProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bugsfiles',
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
