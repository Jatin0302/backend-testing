const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mastertask', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vTitle: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    jTaskTypeId: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    eStatus: {
      type: DataTypes.ENUM('Draft','Active','Inactive'),
      allowNull: false
    },
    eDefault: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0 = No, 1 = Yes"
    },
    jFrameworkId: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    jServiceId: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'mastertask',
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
