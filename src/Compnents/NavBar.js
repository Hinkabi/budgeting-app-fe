import { Link } from "react-router-dom"

export default function NavBar() {
    return (
      <nav>
        <h1>
          <Link to="/transactions">Transactions</Link>
        </h1>
        <button>
          <Link to="/transaction/new">New Transaction</Link>
        </button>
      </nav>
    );
  }