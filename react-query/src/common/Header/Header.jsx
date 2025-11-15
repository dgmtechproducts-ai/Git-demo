import { Link } from "react-router-dom";
import "./styles.css";

export default function Header() {
  return (
    <header className ="header">
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/old" className="link">Old Fetch</Link>
        <Link to="/rq" className="link">React Query</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/infinite" className="link">infiniteScroll</Link>
      </nav>
    </header>
  );
}


