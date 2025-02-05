const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmeta', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldTableId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iRelId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "Reference based on eMetaType:\n                - If 'Framework', refers to Technology ID\n                - If 'Skill', refers to Department table\n                - If 'Tool', refers to ToolType ID"
    },
    eMetaType: {
      type: DataTypes.ENUM('Industry','Framework','ProjectType','Service','Technology','ToolType','Tool','Database','Integration','Skill'),
      allowNull: true
    },
    vName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    iCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOrderNo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eStatus: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0 = Inactive, 1 = Active"
    },
    eOutdated: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0",
      comment: "0 = 'No', 1 = 'Yes'"
    },
    eSecondary: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'projectmeta',
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
