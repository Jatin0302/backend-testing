const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bookeduser', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    iBookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: "Reference: ResourceBooking Table"
    },
    iUserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eResourceBookingType: {
      type: DataTypes.ENUM('Framework','Without Framework','Not In Project','Rest'),
      allowNull: false
    },
    iBookedHours: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fAvailableHours: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dExpectedStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    dExpectedEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bookeduser',
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
