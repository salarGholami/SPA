import style from "./Navigation.module.css";
import { NavLink } from "react-router-dom";


const Navigation = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "AboutUs", to: "/about-us" },
    { name: "Profile", to: "/profile" }, 
    { name: "Blogs", to: "/blogs" }, 
  ];

  return (
    <nav>
      <div className={style.blurNav}></div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={(navData) =>
                  navData.isActive ? style.activeLink : ""
                }
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
