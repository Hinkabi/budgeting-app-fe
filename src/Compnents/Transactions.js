import { useEffect, useState } from "react";
import Transaction from "./Transaction";
import axios from "axios";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";


const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(API_URL + "/transactions")
      .then((res) => {
        setTransactions(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        throw err;
      });
  }, []);

  

  // const [color,setColor] = useState("")
  // const changeColor = (()=>{
  //   if(transact)
  // })

  var sumOfAmounts = transactions.reduce((sum, currentVal) => {
      return sum + currentVal.amount;
  }, 0);
  console.log("testing:", sumOfAmounts)

  return (
    <div className="Transactions">
        <h2 style={{textAlign: "center"}}>Total Budget:${sumOfAmounts}</h2>
      <ReactBootStrap.Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>From</th>
            <th>Amount In/Out</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
              const { date, from, amount} = transaction;
            return (
            <tr key={index}>
            <td>{date}</td>
            <td>
            <Link to={`${index}`}>{from}</Link>
            </td>
            <td
            style={amount > 0 ? {color:"green"}: {color: "red"}}
            >{amount}</td>
          </tr>
            );
          })}
        </tbody>
      </ReactBootStrap.Table>
    </div>
  );
}

export default Transactions;
