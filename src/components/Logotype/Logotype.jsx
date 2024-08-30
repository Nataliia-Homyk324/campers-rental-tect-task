import style from "./Logotype.module.css";
import { Link } from "react-router-dom";

const Logotype = () => {
  return (
    <div>
      <Link className={style.logotype} to="/">
        Travel<span className={style.logo}>Trucks</span>
      </Link>
    </div>
  );
};
export default Logotype;
