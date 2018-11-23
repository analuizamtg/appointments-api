const mongoose = require("mongoose");

module.exports = {
  connectAndDisconnect: (req, res, next) => {
    const { MONGO_URL } = req.webtaskContext.secrets;
    mongoose.connect(
      MONGO_URL,
      { useMongoClient: true }
    );
    req.on("end", () => {
      mongoose.disconnect();
    });
    next();
  }
};
