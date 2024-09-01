import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/catalog/operations.js";
import { selectIsLoadingCamper } from "../../redux/catalog/selectors.js";
import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
// import notFoundImg from "../../assets/img/image-not-found.jpg";
import style from "./CamperDetailsPage.module.css";
import clsx from "clsx";
import Loader from "../../components/Loader/Loader.jsx";
import icons from "../../assets/icons/icons.svg";
import { selectCamper } from "../../redux/catalog/selectors.js";

const CamperDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoadingCamper);
  const data = useSelector(selectCamper);
  useEffect(() => {
    if (id) {
      dispatch(fetchCamperById(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Loader />
      </div>
    );
  }

  const buildLinkClass = ({ isActive }) => {
    return clsx(style.navLink, isActive && style.navLinkActive);
  };

  return (
    <section className={style.camperDetails}>
      {data ? (
        <div className={style.details}>
          <div className={style.title}>
            <h2 className={style.name}>{data.name}</h2>
          </div>

          <div className={style.rating}>
            <div className={style.text}>
              <svg className={style.iconStar}>
                <use href={`${icons}#icon-star`}></use>
              </svg>

              <span className={style.reviews}>{`${data.rating}(${
                data.reviews ? data.reviews.length : null
              } Reviews)`}</span>
            </div>
            <div className={style.location}>
              <svg className={style.iconLocation}>
                <use href={`${icons}#icon-map`}></use>
              </svg>
              {data.location}
            </div>
          </div>

          <div className={style.priceWrapper}>
            <p className={style.price}>€{data.price}.00</p>
          </div>

          <div className={style.container}>
            {data.gallery
              ? data.gallery.map((item, index) => (
                  <img
                    src={item.original}
                    alt="camper photo"
                    key={index}
                    className={style.photo}
                  />
                ))
              : null}
          </div>

          <p className={style.description}>{data.description}</p>
        </div>
      ) : null}

      <nav className={style.moreInfo}>
        <NavLink className={buildLinkClass} to={"features"}>
          Features
        </NavLink>
        <NavLink className={buildLinkClass} to={"reviews"}>
          Reviews
        </NavLink>
      </nav>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default CamperDetailsPage;
