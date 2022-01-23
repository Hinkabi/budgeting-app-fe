import { useEffect, useState } from "react"
import Transaction from "./Transaction"
import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL)

function Transactions(){
    const [transactions, setTransactions] = useState([]);
    useEffect(()=>{
       axios.get(API_URL + "/transactions")
       .then((res)=>{
           setTransactions(res.data)
           console.log(res.data)
       }).catch((err)=>{
           throw err
       });

    }, []);

    return(
        <div className="Transactions">
            {transactions.map((transaction, index)=>{
                return <Transaction key={index} transaction={transaction} index={index} />
            })}
        </div>
    )
}


export default Transactions;
