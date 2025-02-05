const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clickupwebhooks', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    i_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    i_space_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    i_token_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    v_webhook_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'clickupwebhooks',
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
