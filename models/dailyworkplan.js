const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dailyworkplan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iTimelogId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iTaskId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AssignedDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    BookedHours: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dailyworkplan',
    timestamps: false,
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
