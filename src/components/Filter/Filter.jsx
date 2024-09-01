import { locationsList } from "./locations";
import style from "./Filter.module.css";
import icons from "../../assets/icons/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocation,
  selectAC,
  selectTransmission,
  selectKitchen,
  selectTV,
  selectBathroom,
  selectVan,
  selectFullyIntegrated,
  selectAlcove,
} from "../../redux/filter/selectors";
import {
  setLocation,
  toggleAC,
  toggleTransmission,
  toggleKitchen,
  toggleTV,
  toggleBathroom,
  toggleVan,
  toggleFullyIntegrated,
  toggleAlcove,
} from "../../redux/filter/filterSlice";
import { fetchCampers } from "../../redux/catalog/operations.js";

const Filter = () => {
  const dispatch = useDispatch();

  const location = useSelector(selectLocation);
  const isACSelected = useSelector(selectAC);
  const isTransmissionSelected = useSelector(selectTransmission);
  const isKitchenSelected = useSelector(selectKitchen);
  const isTVSelected = useSelector(selectTV);
  const isBathroomSelected = useSelector(selectBathroom);
  const isVanSelected = useSelector(selectVan);
  const isFullyIntegratedSelected = useSelector(selectFullyIntegrated);
  const isAlcoveSelected = useSelector(selectAlcove);

  const handleLocationChange = (event) => {
    dispatch(setLocation(event.target.value));
  };

  const handleSearch = () => {
    dispatch(fetchCampers());
  };

  return (
    <div className={style.wrapper}>
      <label className={style.label}>Location</label>
      <div className={style.customSelect}>
        <svg className={style.iconSelect}>
          <use href={`${icons}#icon-map`}></use>
        </svg>
        <select
          className={style.select}
          value={location}
          onChange={handleLocationChange}
        >
          <option value="City" disabled>
            City
          </option>
          {locationsList.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {/* Filters Section */}
      <div className={style.equipment}>
        <label className={style.label}>Filters</label>
        <label className={style.labelEquipment}>Vehicle equipment</label>
        <div className={style.separator}></div>
      </div>

      <div className={style.iconsFilter}>
        <button
          className={`${style.card} ${isACSelected ? style.selected : ""}`}
          onClick={() => dispatch(toggleAC())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-wind`}></use>
          </svg>
          <p className={style.labelIconsFilter}>AC</p>
        </button>

        <button
          className={`${style.card} ${
            isTransmissionSelected ? style.selected : ""
          }`}
          onClick={() => dispatch(toggleTransmission())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-diagram`}></use>
          </svg>
          <p className={style.labelIconsFilter}>Automatic</p>
        </button>

        <button
          className={`${style.card} ${isKitchenSelected ? style.selected : ""}`}
          onClick={() => dispatch(toggleKitchen())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-cup-hot-1`}></use>
          </svg>
          <p className={style.labelIconsFilter}>Kitchen</p>
        </button>

        <button
          className={`${style.card} ${isTVSelected ? style.selected : ""}`}
          onClick={() => dispatch(toggleTV())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-tv`}></use>
          </svg>
          <p className={style.labelIconsFilter}>TV</p>
        </button>

        <button
          className={`${style.card} ${
            isBathroomSelected ? style.selected : ""
          }`}
          onClick={() => dispatch(toggleBathroom())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-bi_droplet-1`}></use>
          </svg>
          <p className={style.labelIconsFilter}>Bathroom</p>
        </button>
      </div>

      {/* Vehicle Type Section */}
      <div className={style.equipment}>
        <label className={style.labelEquipment}>Vehicle type</label>
        <div className={style.separator}></div>
      </div>

      <div className={style.iconsFilter}>
        <button
          className={`${style.card} ${isVanSelected ? style.selected : ""}`}
          onClick={() => dispatch(toggleVan())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-bi_grid-1x2`}></use>
          </svg>
          <p className={style.labelIconsFilter}>Van</p>
        </button>

        <button
          className={`${style.card} ${
            isFullyIntegratedSelected ? style.selected : ""
          }`}
          onClick={() => dispatch(toggleFullyIntegrated())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-bi_grid`}></use>
          </svg>
          <p className={style.labelIconsFilter}>Fully Integrated</p>
        </button>

        <button
          className={`${style.card} ${isAlcoveSelected ? style.selected : ""}`}
          onClick={() => dispatch(toggleAlcove())}
        >
          <svg className={style.icon}>
            <use href={`${icons}#icon-bi_grid-3x3-gap`}></use>
          </svg>
          <p className={style.labelIconsFilter}>Alcove</p>
        </button>
      </div>

      <button className={style.searchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Filter;
