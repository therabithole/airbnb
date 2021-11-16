function logger(req, res, next) {
  console.log("loging in..");
  next();
}

module.exports = logger;
