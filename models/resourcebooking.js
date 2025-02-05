const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resourcebooking', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iCreatedUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dMonth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    iClientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    iProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    iEstimatedHours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    eBookingRequirement: {
      type: DataTypes.ENUM('Fixed Price','Resource Hire'),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'resourcebooking',
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
