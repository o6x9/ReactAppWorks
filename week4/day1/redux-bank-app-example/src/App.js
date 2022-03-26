import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";

function App() {
  const accBalance = useSelector((state) => state.bank.balance);

  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    useDispatch()
  );

  return (
    <div className="App">
      <h1>Bank</h1>
      <h1>{accBalance}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)} disabled={accBalance <= 0}>
        Withdraw
      </button>
    </div>
  );
}

export default App;
