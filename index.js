const express = require("express");
const webtask = require("webtask-tools");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require("./db").connectAndDisconnect);
require("./routes/appointments")(app);

module.exports = webtask.fromExpress(app);
