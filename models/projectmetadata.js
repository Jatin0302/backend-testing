const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projectmetadata', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iOldTableId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iOldProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iOldTableMetaId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iProjectMetaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eMetaType: {
      type: DataTypes.ENUM('Framework','ProjectType','Service','Technology','Tool','Database'),
      allowNull: false
    },
    iMergedProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'projectmetadata',
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
      {
        name: "iProjectId",
        using: "BTREE",
        fields: [
          { name: "iProjectId" },
        ]
      },
    ]
  });
};
