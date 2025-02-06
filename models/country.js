module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      vCountryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vCountryCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      iMarketSize: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: 'Market size for the country',
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    },
    {
      tableName: "Country",
      timestamps: false,
    }
  );

  Country.associate = (models) => {
    Country.hasMany(models.User, { foreignKey: "iCountryId", as: "users" });
  };

  return Country;
};
