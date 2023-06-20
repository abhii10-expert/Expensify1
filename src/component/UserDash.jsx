import React, { useState, useEffect } from 'react';
import './UserDash.css';
import { Link, Button } from '@mui/material';

const UserDash = () => {
  const [incomeTransactions, setIncomeTransactions] = useState([]);
  const [expenseTransactions, setExpenseTransactions] = useState([]);

  useEffect(() => {
    fetchIncomeTransactions();
    fetchExpenseTransactions();
  }, []);

  const fetchIncomeTransactions = async () => {
    try {
      const response = await fetch('/api/incomes');
      const data = await response.json();
      setIncomeTransactions(data.incomes);
    } catch (error) {
      console.error('Error fetching income transactions:', error);
    }
  };

  const fetchExpenseTransactions = async () => {
    try {
      const response = await fetch('/api/expenses');
      const data = await response.json();
      setExpenseTransactions(data.expenses);
    } catch (error) {
      console.error('Error fetching expense transactions:', error);
    }
  };

  const handleEditTransaction = async (transactionId, transactionType) => {
    // Perform necessary actions to edit the transaction
  };

  const handleDeleteTransaction = async (transactionId, transactionType) => {
    try {
      const endpoint = transactionType === 'income' ? '/api/incomes' : '/api/expenses';
      await fetch(`${endpoint}/${transactionId}`, { method: 'DELETE' });

      if (transactionType === 'income') {
        fetchIncomeTransactions();
      } else {
        fetchExpenseTransactions();
      }
    } catch (error) {
      console.error(`Error deleting transaction with ID ${transactionId}:`, error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">User Dashboard</h2>
      <Button component={Link} href="/add" className="add-button">
        Add
      </Button>

      <div className="table-container">
        <h3 className="table-heading">Income Transactions</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {incomeTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td className="action-buttons">
                  <button onClick={() => handleEditTransaction(transaction._id, 'income')}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTransaction(transaction._id, 'income')}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-container">
        <h3 className="table-heading">Expense Transactions</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Amount</th>
              <th>Note</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenseTransactions.map((transaction) => (
              <tr key={transaction._id}>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td className="action-buttons">
                  <button onClick={() => handleEditTransaction(transaction._id, 'expense')}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteTransaction(transaction._id, 'expense')}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDash;
