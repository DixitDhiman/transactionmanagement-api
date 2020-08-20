/*
 * @file: transaction.js
 * @description: It Contain function layer for transaction controller.
 * @author: Dixit
 */

import { successAction, failAction } from "../../utilities/response";
import { _add, _list } from "./service";
import Message from "../../utilities/messages";

/**************** Add Transaction ***********/
export const add = async (req, res, next) => {
  try {
    let payload = {};
    if (req.body.transType === 'Credit') payload['credit'] = req.body.amount;
    if (req.body.transType === 'Debit') payload['debit'] = req.body.amount;
    payload['description'] = req.body.description;
    const data = await _add(payload);
    res.status(200).json(successAction(data, Message.transAdded));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};

/**************** List Transaction ***********/
export const list = async (req, res, next) => {
  const payload = {};
  try {
    let data = await _list(payload);
    let newbal = 0;
    data.map(item => {
      if (item.credit) {
        newbal = newbal + item.credit;
      }
      if (item.debit) {
        newbal = newbal - item.debit;
      }
      item['balance'] = newbal;
    })
    res.status(200).json(successAction(data, Message.recordFetched));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};