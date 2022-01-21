import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/transactions">Transactions</Link>
        <Link to="/signup">Signup</Link>
      </nav>
    </div>
  );
};

export default Navigation;
