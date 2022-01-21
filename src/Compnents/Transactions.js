import { useEffect, useState } from "react"
// import Transaction from
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;

function Transactions(){
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
       axios.get(API_URL + "/transactions")
       .then((res)=>{
           setTransactions(res.data)
           console.log(res)
       }).catch((err)=>{
           throw err
       });

    }, []);

    return(
        <div className="Transactions">
            {transactions.map((transaction, index)=>{
                return <p> {transaction.name} </p>
            })}
        </div>
    )
}


export default Transactions;
