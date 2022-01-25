import { Button, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

function TransactionShowDetails() {
  const [transaction, setTransaction] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/transactions/${index}`)
      .then((res) => {
        setTransaction(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        navigate("not-found");
      });
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API_URL}/transactions/${index}`)
      .then((res) => {
        navigate("/transactions");
      })
      .catch(() => {
        navigate("not-found");
      });
  };

  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item>Date: {transaction.date}</ListGroup.Item>
        <ListGroup.Item>Name: {transaction.name}</ListGroup.Item>
        <ListGroup.Item>Amount: {transaction.amount}</ListGroup.Item>
        <ListGroup.Item>From: {transaction.from}</ListGroup.Item>
      </ListGroup>
      {/* <h3>{transaction.date}</h3>
      <p>{transaction.name}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.from}</p>
      <p>{transaction.category}</p> */}

      <div className="pageNavigation">
        <div>
          <Link to={`/transactions`}>
            <Button variant="outline-primary">Back</Button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <Button variant="outline-primary"> Edit</Button>
          </Link>
        </div>
        <div>
          <Button variant="outline-primary" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TransactionShowDetails;
