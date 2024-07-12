import React, { useState, useEffect } from "react";
import { getTransactions } from "../services/api";
import "./TransactionsTable.css";
import StatisticsBox from "./StatisticsBox";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [month, setMonth] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchTransactions();
  }, [search, page, month]);

  const fetchTransactions = async () => {
    const params = { search, page, month };
    const { data } = await getTransactions(params);
    console.log("data", data);
    setTotalPages(data.totalPages);
    setTransactions(data.transactions);
  };

  console.log("month in table", month);
  return (
    <div>
      <div className="search">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search transactions"
        />
        <div className="custom-dropdown">
          <select
            onChange={(e) => setMonth(e.target.value)}
            value={month}
            className="form-select"
          >
            <option disabled>Select Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option defaultChecked value="3">
              March
            </option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions &&
            transactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.id}</td>
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{transaction.price}</td>
                <td>{transaction.category}</td>
                <td>{transaction.sold ? "Yes" : "No"}</td>
                <td>
                  <img src={transaction.image} alt="product img" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="page">
        <p>Page: {page}</p>
        <div><button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
          Previous
        </button> -
        <button
          onClick={() => {
            if (totalPages > page) {
              setPage(page + 1);
            }
          }}
        >
          Next
        </button></div>
        <p> PerPage: 10</p>
      </div>
      <StatisticsBox month={month} />
      <br />
      <br />
      <BarChart month={month} />
      <br />
      <PieChart month={month} />
    </div>
  );
};

export default TransactionsTable;
