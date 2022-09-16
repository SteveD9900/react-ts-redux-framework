import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BankState } from "./BankModel";
import { DepositMoney, WithdrawMoney, Bankrupt } from "./BankAction";

const initialState: BankState = {
    Bank: 0,
}

const extraReducers = (builder: ActionReducerMapBuilder<BankState>) => {
    builder.addCase(
        DepositMoney,
        (state: BankState, action: PayloadAction<any>) => {
            state.Bank += action.payload;
        }
    )
    builder.addCase(
        WithdrawMoney,
        (state: BankState, action: PayloadAction<any>) => {
            state.Bank -= action.payload;
        }
    )
    builder.addCase(
        Bankrupt,
        (state: BankState, action: PayloadAction<any>) => {
            state.Bank = 0;
        }
    )
  }

const callbackSlice = createSlice({
  name: "callback",
  initialState,
  reducers: {},
  extraReducers
});

export default callbackSlice.reducer;

