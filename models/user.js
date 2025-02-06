module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      iCountryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      eNDAProtected: {
        type: DataTypes.INTEGER,
      },
      eType :{
        type: DataTypes.STRING
      }
    },
    {
      tableName: "User",
      timestamps: false,
    }
  );

  User.associate = (models) => {
    User.belongsTo(models.Country, { foreignKey: "iCountryId", as: "Country" });
  };

  return User;
};
