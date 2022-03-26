import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from "./state/index";
import "./App.css";

function App() {

  /* 
    Note: A Hook is a special function that lets you “hook into” React features
  */

  // useState is a Hook that lets you add React state to function components. 
  // We are destructuring the array sent from the useState hook first element of the array represents the "state value" and the second element resembles the "state setter" and we get to choose the names for both
  const [loanInput, setLoanInput] = useState(""); // '' is the initial state value for loanInput
  console.log(loanInput);

  // we can use the useSelector() Hook to make a subscription to the Redux store and get the data we need from the global redux store
  const accBalance = useSelector((state) => state.bank.balance);
  const debtDue = useSelector((state) => state.bank.debt);

  // the useDispatch hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Bank</h1>
      <h1>{accBalance}</h1>
      <button onClick={() => dispatch(actionCreators.depositMoney(1000))}>Deposit</button>
      <button onClick={() => dispatch(actionCreators.withdrawMoney(1000))} disabled={accBalance <= 0}>
        Withdraw
      </button>
      <br />
      <br />
      <h3>Take loan</h3>
      <input
        value={loanInput}
        type="number"
        onChange={(e) => { setLoanInput(e.target.value) }}
        placeholder="add loan amount here..."
      />
      <button disabled={!loanInput} onClick={() => {
        dispatch(actionCreators.takeLoan(loanInput))
setLoanInput("")

      } 
    
    
    }>
        Take Loan
      </button>
      <h4>
        Your due debt: {debtDue}
      </h4>
      <br>
      </br> 
      <button disabled={debtDue ==0 ||!loanInput} onClick={() => {
        dispatch(actionCreators.payAllLoan(loanInput))
      }}>
        Pay All Loan
      </button>
    </div>
  );
}

export default App;