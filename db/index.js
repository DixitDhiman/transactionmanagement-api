/*
 * @file: index.js
 * @description: It Contain db setup function.
 * @author: Dixit
 */

import mongoose from "mongoose";
import config from "config";
const { name, host, port } = config.get("db");

const databaseUrl = `mongodb://${host}:${port}/${name}`;
console.log("databaseUrl: ", databaseUrl);

// Mongose setup with server
mongoose.connect(databaseUrl, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}
);

export const connection = () => {
  mongoose.connection.on("connected", function () {
    console.log("Mongoose connected! ");
  });
};
