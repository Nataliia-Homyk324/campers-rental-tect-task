import { NavLink } from "react-router-dom";
import style from "./HomePage.module.css";
import heroImage from "../../assets/img/hero.jpg";

const HomePage = () => {
  return (
    <div
      className={style.container}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className={style.title}>Campers of your dreams</h1>
      <p className={style.text}>
        You can find everything you want in our catalog
      </p>
      <NavLink className={style.navLink} to="/catalog">
        <span className={style.link}>View Now</span>
      </NavLink>
    </div>
  );
};
export default HomePage;
