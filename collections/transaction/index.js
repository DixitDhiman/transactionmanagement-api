/*
 * @file: index.js
 * @description: It Contain function layer for transaction collection.
 * @author: Dixit
 */

import mongoose from "mongoose";
import dbSchema from "./db-schema";

class TransactionClass {
    static saveTransaction(payload) {
        return this(payload).save();
    }
    static listTransaction(payload) {
        return this.find(payload);
    }
}

dbSchema.loadClass(TransactionClass);

export default mongoose.model("Transaction", dbSchema);