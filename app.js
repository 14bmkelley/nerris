module.exports = function() {
  
  // Create Application
  const express = require("express");
  const app = express();
  
  // Express Application Middleware
  const favicon = require("serve-favicon");
  const cookieParser = require("cookie-parser");
  const bodyParser = require("body-parser");
  const mongoose = require("mongoose");
  
  // Bind Middleware
  app.set("views", __dirname + "/views");
  app.set("view engine", "ejs");
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(__dirname + "/public"));
  
  // Connect to Database
  mongoose.connect("mongodb://localhost/nerris");
  
  // Database Models
  const userSchema = require(__dirname + "/models/user")(mongoose.Schema);
  
  // Context for URL Mapping
  const context = {
    "models": {
      "User": "Something"  //mongoose.model("User", userSchema)
    }
  };
  
  // URL Mappings
  const renderController = require(__dirname + "/controllers/render");
  const apiController = require(__dirname + "/controllers/api");
  
  // Bind URL Mappings
  app.use("/", renderController(express.Router(), context));
  app.use("/", apiController(express.Router(), context));
  
  return app;
  
}
