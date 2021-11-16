const Joi = require("joi");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const properties = require("./routes/properties");
const categories = require("./routes/categories");
const amenities = require("./routes/amenities");
const rooms = require("./routes/rooms");
const deals = require("./routes/deals");
const stars = require("./routes/stars");
const bookings = require("./routes/bookings");
const customers = require("./routes/customers");

const ho = require("./routes/ho");
const auth = require("./middleware/auth");
const logger = require("./middleware/logger");

mongoose
  .connect("mongodb://localhost/airbnb")
  .then(() => console.log("connected to mongo"))
  .catch(() => console.log("error on mongo"));

//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);
app.use(auth);

app.use("/api/ho", ho);
app.use("api/properties", properties);
app.use("api/categories", categories);
app.use("/api/amenities", amenities);
app.use("api/stars", stars);
app.use("/api/rooms", rooms);
app.use("api/deals", deals);
app.use("api/customers", customers);

//
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
