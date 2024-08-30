import Filter from "../../components/Filter/Filter.jsx";
import CampersList from "../../components/CampersList/CampersList.jsx";
import style from "./CampersPage.module.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/catalog/operations.js";

const CampersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div className={style.container}>
      <Filter />
      <CampersList />
    </div>
  );
};

export default CampersPage;
