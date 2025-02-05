const express = require("express");

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(
  "mysql://root:this.admin@localhost:3306/overview"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const User = require("./models/user")(sequelize, DataTypes);
const Country = require("./models/country")(sequelize, DataTypes);

const app = express();

app.use(express.json());

app.listen(8000);

app.get("/user_by_country", (req, res) => {
  // Find all users and include the associated country
  const Result = User.findByPk(1)
  return res.json({Result})
    
});

module.exports = app;
