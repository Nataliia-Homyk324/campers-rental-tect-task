import style from "./Card.module.css";
import icons from "../../assets/icons/icons.svg";

const Card = ({ iconId, label }) => {
  return (
    <div className={style.card}>
      <svg className={style.icon}>
        <use href={`${icons}#${iconId}`}></use>
      </svg>
      <p className={style.labelIconsFilter}>{label}</p>
    </div>
  );
};

export default Card;
