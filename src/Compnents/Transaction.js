import { Link } from "react-router-dom"


function Transaction( {transaction, index} ) {

    return(
        <div>
            <div className="front-end-transactions">
            {transaction.date}
            {transaction.name}
            {transaction.amount}
            </div>
            <Link to={`/transactions/${index}`}>✏️</Link>
        </div>
    )
}

export default Transaction;