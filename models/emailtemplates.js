const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('emailtemplates', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    v_slug: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    t_email_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    v_template_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    v_template_subject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    e_status: {
      type: DataTypes.ENUM('0','1'),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'emailtemplates',
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
