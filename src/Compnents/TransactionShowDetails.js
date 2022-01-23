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
      <h3>{transaction.date}</h3>
      <p>{transaction.name}</p>
      <p>{transaction.amount}</p>
      <p>{transaction.from}</p>
      <p>{transaction.category}</p>

      <div className="pageNavigation">
        <div>
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TransactionShowDetails;