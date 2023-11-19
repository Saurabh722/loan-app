import { useState, useContext } from 'react';

import { UserContext } from '../context/userContext';
import fetchBalanceSheet from '../services/fetchBalanceSheet';
import fetchLoanDecision from '../services/fetchLoanDecision';

import QueryForm from './query-form';
import LoanStatus from './loan-status';
import BalanceSheet from './balance-sheet';

const initLoan = {
  establishedYear: '',
  loanAmount: '',
  accountProvider: ''
}

export default function Loan() {
  const [balanceSheets, setBalanceSheets] = useState(null);
  const [loanStatus, setLoanStatus] = useState(null);

  const user = useContext(UserContext);
  const [fields, setFields] = useState(initLoan);
  const { userId, firstName, email } = user;
  async function getBalanceSheet() {
    const data = {
      ...fields,
      userId,
      firstName,
      email
    };

    const { balanceSheet } = await fetchBalanceSheet(data);
    console.log(balanceSheet);
    setBalanceSheets(balanceSheet);
  }

  async function getLoanStatus() {
    const data = {
      balanceSheets,
      ...fields,
      userId,
      firstName,
      email
    };

    console.log(data);

    const loanDecision = await fetchLoanDecision(data);
    setLoanStatus(loanDecision.data);
  }

  const onChangeHandler = ({ target }) => {
    setFields({
      ...fields,
      [target.name]: target.value
    })
  }

  return (
    <main className="main">
      <div className="description">
        {!loanStatus && !balanceSheets && <div className={''}>
          <QueryForm getBalanceSheet={getBalanceSheet} onChangeHandler={onChangeHandler} />
        </div>}
        {!loanStatus && balanceSheets && <>
          <div className="balance_sheet">
            <BalanceSheet sheets={balanceSheets} />
          </div>
          <button className="btn" onClick={getLoanStatus}>
            Check Loan Status
          </button></>}
      </div>
      {loanStatus && <LoanStatus status={loanStatus} />}
    </main>
  )
}