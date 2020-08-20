/*
 * @file: list.js
 * @description: It Contain transaction list  router/api.
 * @author: Dixit
 */
import express from "express";
import { list } from "./../../src/transaction/controller";

const app = express();

app.get("/transaction", list);

export default app;
