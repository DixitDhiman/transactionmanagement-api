/*
 * @file: add.js
 * @description: It Contain transaction add router/api.
 * @author: Dixit
 */
import express from "express";
import { createValidator } from "express-joi-validation";
import Joi from "@hapi/joi";
import { add } from "./../../src/transaction/controller";
const app = express();
const validator = createValidator({ passError: true });

const transactionSchema = Joi.object({
  transType: Joi.string()
    .required()
    .label("Transaction Type"),
  amount: Joi.number()
    .required()
    .label("Amount"),
  description: Joi.string()
    .required()
    .label("Description")
});

app.post("/transaction", validator.body(transactionSchema, { joi: { convert: true, allowUnknown: false } }), add);

export default app;
