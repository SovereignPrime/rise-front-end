// Modules
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, Routes, Route } from "react-router-dom";
import CancelledTransactions from "./CancelledTransactions";

// This will be our "Make a Payment Page."

const CompletedTransactions = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Event Handler for input fields
    console.log(`hello`);
    navigate("/Nirvana");
  };

  return (
    <div className="wrapper">
      <nav className="compTransactionMenu">
        <ul>
          <li>Completed</li>
          <li>
            <Link to="CancelledTransactions">Cancelled</Link>
          </li>
        </ul>
      </nav>
      <div className="completedTransactions">
        <h2>Completed Transactions</h2>
        <p>Search</p>
        <form className="formMaster" onSubmit={(event) => handleSubmit(event)}>
          <div className="searchBar">
            <label htmlFor="searchBar">Search Transactions: </label>
            <input type="text" name="searchBar" required />
          </div>
        </form>
        <div className="compTransactionInfo">
          <p>April 7 2022</p>

          <ul>
            <li>SENT - Olumide Oykale - 7:30pm - $10.00</li>
            <li>RECIEVED - Jody Cromle - 8:30pm + $100.00</li>
            <li>SENT - Olumide Oykale - 9:00pm - $10.00 </li>
            <li>RECIEVED - Jody Cromle - 10:30pm + $100.00</li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route
          path="CancelledTransactions/*"
          element={
            <div>
              <h4>Cancelled Transactions</h4>
              <CancelledTransactions />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default CompletedTransactions;
