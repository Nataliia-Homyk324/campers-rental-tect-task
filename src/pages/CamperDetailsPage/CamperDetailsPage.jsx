import {
  //   Link,
  NavLink,
  Outlet,
  //     useLocation,
  //     useParams,
} from "react-router-dom";
import {
  Suspense,
  //   useEffect,
  //   useState
} from "react";
// import notFoundImg from "../../assets/img/image-not-found.jpg";
import style from "./CamperDetailsPage.module.css";
import clsx from "clsx";
import Loader from "../../components/Loader/Loader.jsx";

const CamperDetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(style.navLink, isActive && style.navLinkActive);
  };

  return (
    <section className={style.camperDetails}>
      <h3>camper details</h3>
      <nav className={style.moreInfo}>
        <NavLink className={buildLinkClass} to={"features"}>
          Features
        </NavLink>
        <NavLink className={buildLinkClass} to={"reviews"}>
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default CamperDetailsPage;
