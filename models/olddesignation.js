const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('olddesignation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vDesignation: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    iGradeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iBandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eStatus: {
      type: DataTypes.ENUM('1','0'),
      allowNull: false,
      defaultValue: "1"
    },
    iEstimatedPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'olddesignation',
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
