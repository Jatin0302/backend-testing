const express = require("express");
const countryRoutes = require("./routes/countryRoutes");

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

const app = express();

app.use(express.json());
app.use("/api/countries", countryRoutes);

app.listen(8001);

module.exports = app;
