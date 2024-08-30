import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import clsx from "clsx";
import Logotype from "../Logotype/Logotype.jsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(style.navLink, isActive && style.navLinkActive);
  };

  return (
    <header className={style.container}>
      <nav className={style.headerNav}>
        <div>
          <Logotype />
        </div>
        <div className={style.menu}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
