const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exitinterview', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eInterviewFormStatus: {
      type: DataTypes.ENUM('Pending','Completed','Blacklisted','Incomplete'),
      allowNull: true
    },
    vInterviewFormReason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eExitCheckListStatus: {
      type: DataTypes.ENUM('Pending','Completed'),
      allowNull: true
    },
    dExitInterviewDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    iCreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iUpdatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'exitinterview',
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
