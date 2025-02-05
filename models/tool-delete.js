const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tool-delete', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOrderNo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eStatus: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0 = Inactive, 1 = Active"
    }
  }, {
    sequelize,
    tableName: 'tool-delete',
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
