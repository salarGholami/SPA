import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "AboutUs", to: "/about-us" },
    { name: "Profile", to: "/profile" },
  ];

  return (
    <nav>
      <div className="blurNav"></div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) => (navData.isActive ? "activeLink" : "")}
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
