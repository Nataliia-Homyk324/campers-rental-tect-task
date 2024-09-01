import style from "./VehicleDetails.module.css";
import formatFormCamper from "../../utils/formatFormCamper.js";
import formatQuantity from "../../utils/formatQuantity.js";

const VehicleDetails = ({ data }) => {
  return (
    <div>
      {data ? (
        <div className={style.container}>
          <h2 className={style.title}>Vehicle details</h2>
          <ul className={style.list}>
            <li className={style.item}>
              <span className={style.text}>Form</span>
              <span className={style.text}>
                {data.form ? formatFormCamper(data.form) : null}
              </span>
            </li>
            <li className={style.item}>
              <span className={style.text}>Length</span>
              <span className={style.text}>
                {data.length ? formatQuantity(data.length) : null}
              </span>
            </li>
            <li className={style.item}>
              <span className={style.text}>Width</span>
              <span className={style.text}>
                {data.width ? formatQuantity(data.width) : null}
              </span>
            </li>
            <li className={style.item}>
              <span className={style.text}>Height</span>
              <span className={style.text}>
                {data.height ? formatQuantity(data.height) : null}
              </span>
            </li>
            <li className={style.item}>
              <span className={style.text}>Tank</span>
              <span className={style.text}>
                {data.tank ? formatQuantity(data.tank) : null}
              </span>
            </li>
            <li className={style.item}>
              <span className={style.text}>Consumption</span>
              <span className={style.text}>{data.consumption}</span>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default VehicleDetails;
