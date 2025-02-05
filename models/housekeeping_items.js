const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('housekeeping_items', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    office_no: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    i_category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    v_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    i_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'housekeeping_items',
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
