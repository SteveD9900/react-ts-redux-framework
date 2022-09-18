import "@testing-library/jest-dom/extend-expect";
import BankAccount from "../BankAccount";
import { renderWithProviders } from '../../../utils/test-utils';
import { store } from "../../../state/store";
import { Bankrupt, WithdrawMoney, DepositMoney } from "../../../state/bank";

renderWithProviders(<BankAccount />);

describe("<BankAccount />", () => {
  test("test deposit result is correct", async () => {
    store.dispatch(DepositMoney(1000));
    store.dispatch(DepositMoney(1000));
    const state = store.getState().Bank.value;
    expect(state).toEqual(2000);
  });
  test("test withdraw result is correct", async () => {
    store.dispatch(WithdrawMoney(1000));
    const state = store.getState().Bank.value;
    expect(state).toEqual(1000);
  });
  test("test bankrupt result is correct", async () => {
    store.dispatch(Bankrupt());
    const state = store.getState().Bank.value;
    expect(state).toEqual(0);
  });
});
