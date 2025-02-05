const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jobopeningmetadata', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iJobOpeningId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iJobMetaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eMetaType: {
      type: DataTypes.ENUM('TechnicalSkill','NonTechnicalSkill','RoleAndResponsibility'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'jobopeningmetadata',
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
