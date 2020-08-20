/*
 * @file: app.js
 * @description: It Contain server setup function.
 * @author: Dixit
 */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import config from "config";
import * as DB from "./db";
import api from "./api";
import { failAction } from "./utilities/response";
const app = express();
const http = require("http");
const { port } = config.get("app");

// Access-Control-Allow-Origin
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

/*********** All Routes ********************/
app.use("/", api);

app.use((err, req, res, next) => {
  if (err && err.error && err.error.isJoi) {
    console.log("Joi Errror  : ", err);
    // we had a joi error, let's return a custom 400 json response
    res.status(400).json(failAction(err.error.message.toString().replace(/[\""]+/g, "")));
  } else {
    // pass on to another error handler
    next(err);
  }
});

// Run static setup
app.get("/*", function (req, res) {
  return res.sendFile(
    path.join(__dirname + "/views", "index.html")
  );
});
// check mongose connection
DB.connection();
// create server connection
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`server is running on port ${port}-env=${process.env.NODE_ENV}`);
});
