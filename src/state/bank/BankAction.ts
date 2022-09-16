import { createAction } from "@reduxjs/toolkit";

export const DepositMoney = createAction(
  "bank/deposit",
  (amount: number) => {
    return { 
      payload: amount
    }
  }
);

export const WithdrawMoney = createAction(
  "bank/withdrawMoney",
  (amount: number) => {
    return { 
      payload: amount
    }
  }
);

export const Bankrupt = createAction(
  "bank/bankrupt"
);