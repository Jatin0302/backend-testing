const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nova_pending_field_attachments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    draft_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    disk: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nova_pending_field_attachments',
    timestamps: true,
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
        name: "nova_pending_field_attachments_draft_id_index",
        using: "BTREE",
        fields: [
          { name: "draft_id" },
        ]
      },
    ]
  });
};
