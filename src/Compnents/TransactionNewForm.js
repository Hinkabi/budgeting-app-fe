import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
  });

  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API_URL}/transactions`, transaction)
      .then((res) => {
        navigate("/transactions");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input className="form-control"
          id="date"
          value={transaction.date}
          type="text"
          onChange={handleTextChange}
          placeholder="date"
          required
        />
        <label htmlFor="name">Name</label>
        <input className="form-control"
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="name"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input className="form-control"
          id="amount"
          value={transaction.amount}
          type="number"
          onChange={handleTextChange}
          placeholder="amount"
          required
        />
        <label htmlFor="from">From</label>
        <input className="form-control"
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="from"
          required
        />

        <input type="submit" />
      </form>
    </div>
  );
}

export default TransactionNewForm;
