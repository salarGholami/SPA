import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";

const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink
            to="/profile/dashboard"
            className={(navData) => (navData.isActive ? style.activeLink : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/downloads"
            className={(navData) => (navData.isActive ? style.activeLink : "")}
          >
            Downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
