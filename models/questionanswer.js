const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questionanswer', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    eRelType: {
      type: DataTypes.ENUM('Appraisee','Applicant'),
      allowNull: false,
      defaultValue: "Applicant"
    },
    iRelId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iQuestionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    vAnswer: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'questionanswer',
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
