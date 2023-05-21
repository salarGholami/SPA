import "./Navigation.css";
import { NavLink } from "react-router-dom";

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
