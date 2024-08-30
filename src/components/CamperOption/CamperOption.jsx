import style from "./CamperOption.module.css";

import icons from "../../assets/icons/icons.svg";

export default function CamperOption({ data }) {
  return (
    <div className={style.container}>
      {data.transmission === "automatic" ? (
        <div className={style.optionItem}>
          <svg className={style.iconOption}>
            <use href={`${icons}#icon-diagram`}></use>
          </svg>

          <p className={style.optionText}>Automatic</p>
        </div>
      ) : null}
      {data.AC ? (
        <div className={style.optionItem}>
          <svg className={style.iconOption}>
            <use href={`${icons}#icon-wind`}></use>
          </svg>

          <p className={style.optionText}>AC</p>
        </div>
      ) : null}
      {data.gas ? (
        <div className={style.optionItem}>
          <svg className={style.iconOption}>
            <use href={`${icons}#icon-fuel-pump`}></use>
          </svg>

          <p className={style.optionText}>Petrol</p>
        </div>
      ) : null}
      {data.kitchen ? (
        <div className={style.optionItem}>
          <svg className={style.iconOption}>
            <use href={`${icons}#icon-cup-hot`}></use>
          </svg>

          <p className={style.optionText}>Kitchen</p>
        </div>
      ) : null}
      {data.radio ? (
        <div className={style.optionItem}>
          <svg className={style.iconOption}>
            <use href={`${icons}#icon-ui-radios`}></use>
          </svg>

          <p className={style.optionText}>Radio</p>
        </div>
      ) : null}
      {data.bathroom ? (
        <div className={style.optionItem}>
          <svg className={style.iconOption}>
            <use href={`${icons}#icon-bi_droplet-1`}></use>
          </svg>
          <p className={style.optionText}>Bathroom</p>
        </div>
      ) : null}
    </div>
  );
}
