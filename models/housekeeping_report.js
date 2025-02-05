const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('housekeeping_report', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    office_no: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    people_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    approved_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    e_checked: {
      type: DataTypes.ENUM('0','1'),
      allowNull: false,
      comment: "0 :- No & 1 :- Yes"
    },
    e_approved: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "0",
      comment: "0 :- Not Approved & 1 :- Approved"
    }
  }, {
    sequelize,
    tableName: 'housekeeping_report',
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
