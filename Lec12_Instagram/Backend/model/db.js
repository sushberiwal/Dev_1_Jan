const mongoose = require("mongoose");
const { DB_CONFIG } = require("../config/secrets");

mongoose
  .connect(DB_CONFIG, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(function (obj) {
    console.log(obj);
  });

module.exports.mongoose = mongoose;
