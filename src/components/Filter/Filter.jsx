import { locationsList } from "./locations";
import style from "./Filter.module.css";
import icons from "../../assets/icons/icons.svg";
import Card from "../Card/Card.jsx";

import { useState } from "react";

const cardDataEquipment = [
  { iconId: "icon-wind", label: "AC" },
  { iconId: "icon-diagram", label: "Automatic" },
  { iconId: "icon-cup-hot-1", label: "Kitchen" },
  { iconId: "icon-tv", label: "TV" },
  { iconId: "icon-bi_droplet-1", label: "Bathroom" },
];

const cardDataType = [
  { iconId: "icon-bi_grid-1x2", label: "Van" },
  { iconId: "icon-bi_grid", label: "Fully Integrated" },
  { iconId: "icon-bi_grid-3x3-gap", label: "Alcove" },
];

const Filter = () => {
  const [selectedLocation, setSelectedLocation] = useState("City");

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value); // Update state
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
          value={selectedLocation}
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

      <div className={style.equipment}>
        <label className={style.label}>Filters</label>
        <label className={style.labelEquipment}>Vehicle equipment</label>
        <div className={style.separator}></div>
      </div>

      <div className={style.iconsFilter}>
        {cardDataEquipment.map((card, index) => (
          <Card key={index} iconId={card.iconId} label={card.label} />
        ))}
      </div>

      <div className={style.equipment}>
        <label className={style.labelEquipment}>Vehicle type</label>
        <div className={style.separator}></div>
      </div>

      <div className={style.iconsFilter}>
        {cardDataType.map((card, index) => (
          <Card key={index} iconId={card.iconId} label={card.label} />
        ))}
      </div>
      <button className={style.searchButton}>Search</button>
    </div>
  );
};
export default Filter;
