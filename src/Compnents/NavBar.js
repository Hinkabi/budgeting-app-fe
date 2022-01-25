// import { Link } from "react-router-dom";
import { Navbar, Container, Button, Nav } from "react-bootstrap";

export default function NavBar() {
  return (
    // <nav>
    //   {/* <h1>
    //     <Link to="/transactions">Transactions</Link>
    //   </h1> */}
    //   <button>
    //     <Link to="/transactions/new">New Transaction</Link>
    //   </button>
    // </nav>

    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">Budget App</Navbar.Brand>
          <Nav className="float-right">
            <Button variant="outline-primary" href="/transactions/new">
              New Transaction
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
