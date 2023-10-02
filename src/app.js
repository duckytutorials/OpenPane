const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const config = require("../config.js");
const { log } = require('./plugins/log.js') 
const ip = require("ip");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.set("view engine", require("ejs"));
app.use(
  session({
    secret: process.env.secretive_monkey, // Replace with your own secret key
    resave: false, // Set to false to prevent session data from being resaved on every request
    saveUninitialized: true, // Set to true to create a session for every visitor
  })
);
app.use(require("cors")());
app.use("/assets", express.static(path.join(__dirname, "pages/assets")));


// Routing
const admin = require("./pages/routers/admin/index.js");
const api = require("./pages/routers/api/index.js");
const main = require("./pages/routers/main/index.js");

app.use("/admin", admin);
app.use("/api", api);
app.use("", main);


app.get('/node_modules/preline/dist/preline.js', (req, res) => {
  res.sendfile(path.resolve("../daisy_panel/node_modules/preline/dist/preline.js")) // Why Did i do this????
})

// Miscellaneous
app.listen(config.site.port, () => {
  // Init Required
   require("./mongoose/init.js");  
  console.log(`
PORT | Private IP           | Local
${config.site.port} | ${ip.address()}:${config.site.port} | localhost:${
    config.site.port
  }
 `);
  // TESTING PERPOUSES LOLOLOL log.debug('Sexy Banana Eating Monkey')
});
