const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobmeta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eMetaType: {
      type: DataTypes.ENUM('TechnicalSkill','NonTechnicalSkill','RoleAndResponsibility'),
      allowNull: true
    },
    vFrameworkTech: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    vName: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    iOrderNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0 = Inactive, 1 = Active"
    }
  }, {
    sequelize,
    tableName: 'jobmeta',
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
