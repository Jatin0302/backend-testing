const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
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
    iCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iParentQuestionId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    vQuestion: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    vDesc: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    eAnswerType: {
      type: DataTypes.ENUM('1','2','3','4','5','6','7','8','9'),
      allowNull: true,
      comment: "1: Dropdown, 2: Text, 3: Multiselect Dropdown, 4: Datepicker, 5: Radio, 6: Checkbox, 7: Textarea, 8: Text (Email), 9: Text (Number)"
    },
    vOptions: {
      type: DataTypes.JSON,
      allowNull: true
    },
    iOrder: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eIsRequired: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "1",
      comment: "1 - For mandatory, 0 - Not mandatory"
    }
  }, {
    sequelize,
    tableName: 'question',
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
