const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");

/* 
// CONFIG CHECK
console.log("Application Name: " + config.get("name"));

// ENV CHECK
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
// console.log(`NODE_ENV / from APP.get - : ${app.get("env")}`); // second way app.get() , default is development if not set;



// dev features
app.use(helmet());

if (app.get("env") === "develop") {
  app.use(morgan("tiny"));
  console.log("Morgan enabled");
}



*/
