const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questioncategory', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iFormId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    vDescription: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    },
    iOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'questioncategory',
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
