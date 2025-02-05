const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('designation', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    vDesignation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    iGradeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iBandId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('1','0'),
      allowNull: true
    },
    iEstimatedPercentage: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'designation',
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
