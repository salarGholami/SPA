import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <div className="blurNav"></div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About-us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
