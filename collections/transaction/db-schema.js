/*
 * @file: db-schema.js
 * @description: It Contain db schema for transaction collection.
 * @author: Dixit
 */

import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    debit: {
        type: Number,
        required: true,
        default: 0
    },
    credit: {
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        default: ""
    },
    balance: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export default transactionSchema;