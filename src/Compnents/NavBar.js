import { Link } from "react-router-dom"

export default function NavBar() {
    return (
      <nav>
        <h1>
          <Link to="/transactionLogs">Transactions</Link>
        </h1>
        <button>
          <Link to="/transactionLog/new">New Transaction</Link>
        </button>
      </nav>
    );
  }