import React from "react";
import { Progress } from "antd";
const Analytics = ({ allTransection }) => {
  // total transaction
  const totalTransaction = allTransection.length;
  const totalIncomeTransactions = allTransection.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransactions = allTransection.filter(
    (transaction) => transaction.type === "expense"
  );
  const totalIncomePercent =
    (totalIncomeTransactions.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransactions.length / totalTransaction) * 100;

  //total turnover
  const totalTurnover = allTransection.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );
  const totalIncomeTurnover = allTransection
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransection
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalIncomeTurnoverPercent =
    (totalIncomeTurnover / totalTurnover) * 100;
  const totalExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;
  return (
    <>
      <div className="row m-2">
        <div className="col-md-5 mx-auto ">
          <div className="card">
            <div className="card-header">
              Total Transactions : {totalTransaction}
            </div>
            <div className="card-body d-flex p-3 mx-auto">
              <div>
                <h5 className="text-success">
                  Income : {totalIncomeTransactions.length}
                </h5>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomePercent.toFixed(0)}
                />
              </div>
              <div>
                <h5 className="text-danger">
                  Expense : {totalExpenseTransactions.length}
                </h5>

                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-5 mx-auto ">
          <div className="card ">
            <div className="card-header">
              Total Savings : Rs {totalIncomeTurnover - totalExpenseTurnover}
            </div>
            <div className="card-body d-flex p-3 mx-auto">
              <div>
                <h6 className="text-success">
                  Income : Rs {totalIncomeTurnover}
                </h6>
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomeTurnoverPercent.toFixed(0)}
                />
              </div>
              <div>
                <h6 className="text-danger">
                  Expense : Rs {totalExpenseTurnover}
                </h6>

                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpenseTurnoverPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Analytics;
