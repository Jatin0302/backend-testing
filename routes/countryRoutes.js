const express = require("express");
const { getUsersByCountry } = require("../controller/countryControler");

const router = express.Router();

router.get("/user_by_country", getUsersByCountry);

module.exports = router;
