export default function QueryForm({ getBalanceSheet, onChangeHandler }) {
  return (
    <div>
      <div className="query-form form center">
        <div className="form-set">
          <input placeholder='Established Year' name="establishedYear" onChange={onChangeHandler} />
        </div>
        <div className="form-set">
          <input placeholder='Loan Amount' name="loanAmount" onChange={onChangeHandler} />
        </div>
        <div className="form-set">
          <select placeholder='ConfirmPassword' name="accountProvider" onChange={onChangeHandler}>
            <option value="myob">MYOB</option>
            <option value="xero">Xero</option>
          </select>
        </div>
        <div className="form-set">
          <button className="btn large" onClick={getBalanceSheet}>
            Balance Sheet
          </button>
        </div>
      </div>
    </div>
  )
}