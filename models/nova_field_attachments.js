const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nova_field_attachments', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    attachable_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    attachable_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false
    },
    attachment: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    disk: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'nova_field_attachments',
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
        name: "nova_field_attachments_attachable_type_attachable_id_index",
        using: "BTREE",
        fields: [
          { name: "attachable_type" },
          { name: "attachable_id" },
        ]
      },
      {
        name: "nova_field_attachments_url_index",
        using: "BTREE",
        fields: [
          { name: "url" },
        ]
      },
    ]
  });
};
