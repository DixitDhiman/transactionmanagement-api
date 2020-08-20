/*
 * @file: transaction.js
 * @description: It Contain function layer for transaction service.
 * @author: Dixit
 */
import Transaction from "../../collections/transaction";

/********** Save Transaction **********/
export const _add = async payload => {
  return await Transaction.saveTransaction(payload);
};

/********** List Transaction **********/
export const _list = async payload => {
  return await Transaction.listTransaction({});
};