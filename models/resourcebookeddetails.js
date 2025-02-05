const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resourcebookeddetails', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iBookedId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Reference: ResourceBooking Table"
    },
    eBookingType: {
      type: DataTypes.ENUM('Department','Framework'),
      allowNull: false
    },
    iBookingTypeEnumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Reference: Selected eBookingType Id"
    }
  }, {
    sequelize,
    tableName: 'resourcebookeddetails',
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
