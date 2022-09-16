import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import "./BankAccount.scss";
import {
  DepositMoney,
  WithdrawMoney,
  Bankrupt,
  selectBankAmount,
} from "../../state/bank";

function BankAccount() {
  const state = useSelector(selectBankAmount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{state}</h1>
      <Button
        onClick={() => dispatch(DepositMoney(1000))}
        variant="contained"
        color="success"
      >
        Deposit
      </Button>
      <Button onClick={() => dispatch(WithdrawMoney(1000))} variant="contained">
        Withdraw
      </Button>
      <Button
        onClick={() => dispatch(Bankrupt())}
        variant="outlined"
        color="error"
      >
        Bankrupt
      </Button>
    </div>
  );
}

export default BankAccount;
