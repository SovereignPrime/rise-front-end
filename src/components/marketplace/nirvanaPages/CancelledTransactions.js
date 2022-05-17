// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import CompletedTransactions from "./CompletedTransactions";

// This will be our "Make a Payment Page."

const CancelledTransactions = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Event Handler for input fields
    console.log(`hello`);
    navigate("/Nirvana");
  };

  return (
    <div className="wrapper">
      <nav className="cancTransactionMenu">
        <ul>
          <li>Cancelled Transactions</li>
          <li>
            <Link to="CompletedTransactions">Completed</Link>
          </li>
        </ul>
      </nav>
      <div className="cancelledTransactions">
        <h2>Cancelled Transactions</h2>
        <p>Search</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
          <div className="searchBar">
            <label htmlFor="searchBar">Search Transactions: </label>
            <input type="text" name="searchBar" required />
          </div>
        </form>
        <div className="cancTransactionInfo">
          <p>April 7 2022</p>

          <ul>
            <li>SENT - Olumide Oykale - 7:30pm $10.00 Request</li>
            <li>RECIEVED - Jody Cromle - 8:30pm $100.00 Payment</li>
            <li>SENT - Olumide Oykale - 9:00pm $10.00 Request</li>
            <li>RECIEVED - Jody Cromle - 10:30pm $100.00 Payment</li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route
          path="CompletedTransaction/*"
          element={
            <div>
              <h4>Completed Transactions</h4>
              <CompletedTransactions />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default CancelledTransactions;
