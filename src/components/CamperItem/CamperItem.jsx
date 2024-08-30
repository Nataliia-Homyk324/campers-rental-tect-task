import style from "./CamperItem.module.css";
import icons from "../../assets/icons/icons.svg";

import CamperOption from "../CamperOption/CamperOption.jsx";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoriteList } from "../../redux/favorite/selectors.js";
import { toggleFavorite } from "../../redux/favorite/favoriteSlice.js";

export default function CamperItem({ data }) {
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavoriteList);
  const isFavorite = favoriteList.includes(data.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(data.id));
  };

  return (
    <div className={style.container}>
      <img
        src={data.gallery[0].thumb}
        alt="camper photo"
        className={style.photo}
      />
      <div className={style.data}>
        <div className={style.title}>
          <h2 className={style.name}>{data.name}</h2>
          <div className={style.priceWrapper}>
            <p className={style.price}>€{data.price}.00</p>
            <div onClick={handleFavoriteClick}>
              {isFavorite ? (
                <svg className={style.iconRedHeart}>
                  <use href={`${icons}#icon-heart`}></use>
                </svg>
              ) : (
                <svg className={style.iconHeart}>
                  <use href={`${icons}#icon-heart`}></use>
                </svg>
              )}
            </div>
          </div>
        </div>

        <div className={style.rating}>
          <span className={style.text}>
            <svg className={style.iconStar}>
              <use href={`${icons}#icon-star`}></use>
            </svg>

            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
          <span className={style.location}>
            <svg className={style.iconLocation}>
              <use href={`${icons}#icon-map`}></use>
            </svg>
            {data.location}
          </span>
        </div>

        <p className={style.description}>{data.description}</p>
        <CamperOption data={data} />
        <Link to={`/catalog/${data.id}`} className={style.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
}
