const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vFirstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vLastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vPhone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    vEmailId: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    vAlterEmailId: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    vCountry: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    eNDAProtected: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'client',
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
