import { BankState } from "./BankModel";
import { createSelector } from "reselect";

export const selectBank = (state: any): BankState => state.bank.Bank;

export const selectBankAmount = createSelector(
    selectBank,
    (currentBank) => {
        if(!currentBank) return false;
        return currentBank.Bank
    }
)