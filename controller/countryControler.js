const { Sequelize } = require("sequelize");

const { Country, User } = require("../models");

const getUsersByCountry = async (req, res) => {
  try {
    const result = await Country.findAll({
      include: [
        {
          model: User,
          as: "users",
          attributes: [],
          where: { eType: "client", deleted_at: null },
        },
      ],
      attributes: [
        "id",
        "vCountryName",
        [Sequelize.fn("COUNT", Sequelize.col("users.id")), "user_count"],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              "CASE WHEN users.eNDAProtected = '1' THEN 1 ELSE 0 END"
            )
          ),
          "NDA_users",
        ],
        [
          Sequelize.fn(
            "SUM",
            Sequelize.literal(
              "CASE WHEN users.eNDAProtected = '0' THEN 1 ELSE 0 END"
            )
          ),
          "non_NDA_users",
        ],
      ],
      group: ["Country.id"],
      having: Sequelize.literal("COUNT(users.id) > 0"),
      order: [[Sequelize.literal("user_count"), "DESC"]],
      limit: parseInt(req.query.limit) || 5,
      subQuery: false,
    });

    const totalUsers = result.reduce(
      (sum, country) => sum + parseInt(country.dataValues.user_count || 0),
      0
    );

    const updatedResult = result.map((country) => ({
      ...country.dataValues,
      percentage:
        totalUsers > 0
          ? (
              (parseInt(country.dataValues.user_count) / totalUsers) *
              100
            ).toFixed(2)
          : "0.00",
    }));

    res.json({
      count: result.length,
      total: totalUsers,
      result: updatedResult,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsersByCountry };
