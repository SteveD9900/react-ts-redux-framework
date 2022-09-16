import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { RootState } from "../../state/reducers";
import Button from "@mui/material/Button";
import "./BankAccount.scss";

function BankAccount() {
  const state = useSelector((state: RootState) => state.bank);
  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h1>{state}</h1>
      <Button
        onClick={() => depositMoney(1000)}
        variant="contained"
        color="success"
      >
        Deposit
      </Button>
      <Button onClick={() => withdrawMoney(1000)} variant="contained">
        Withdraw
      </Button>
      <Button onClick={() => bankrupt()} variant="outlined" color="error">
        Bankrupt
      </Button>
    </div>
  );
}

export default BankAccount;