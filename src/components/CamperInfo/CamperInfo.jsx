import style from "./CamperInfo.module.css";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/catalog/selectors.js";
import VehicleDetails from "./../VehicleDetails/VehicleDetails.jsx";
import CamperOption from "./../CamperOption/CamperOption.jsx";

const CamperInfo = () => {
  const data = useSelector(selectCamper);
  return (
    <div className={style.container}>
      <CamperOption data={data} />
      <VehicleDetails data={data} />
    </div>
  );
};

export default CamperInfo;
