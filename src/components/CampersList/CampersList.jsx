import { useDispatch, useSelector } from "react-redux";
import styles from "./CampersList.module.css";
import {
  selectAllCampers,
  selectHasMore,
  selectIsLoading,
} from "../../redux/catalog/selectors.js";
import {
  selectLocation,
  selectAC,
  selectTransmission,
  selectKitchen,
  selectTV,
  selectBathroom,
  selectRadio,
  selectAlcove,
  selectVan,
  selectFullyIntegrated,
} from "../../redux/filter/selectors.js";
import { fetchCampers } from "../../redux/catalog/operations.js";
import { resetFilters } from "../../redux/filter/filterSlice";
import CamperItem from "../CamperItem/CamperItem.jsx";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";

export default function CampersList() {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasMore);
  const campers = useSelector(selectAllCampers);
  const isLoading = useSelector(selectIsLoading);

  const location = useSelector(selectLocation);
  const AC = useSelector(selectAC);
  const transmission = useSelector(selectTransmission);
  const kitchen = useSelector(selectKitchen);
  const TV = useSelector(selectTV);
  const bathroom = useSelector(selectBathroom);
  const radio = useSelector(selectRadio);
  const alcove = useSelector(selectAlcove);
  const fullyIntegrated = useSelector(selectFullyIntegrated);
  const van = useSelector(selectVan);

  const filteredCampers = campers.filter((camper) => {
    return (
      (!location || camper.location === location) &&
      (!AC || camper.AC) &&
      (!transmission || camper.transmission === "automatic") &&
      (!kitchen || camper.kitchen) &&
      (!TV || camper.TV) &&
      (!bathroom || camper.bathroom) &&
      (!radio || camper.radio) &&
      (!alcove || camper.alcove) &&
      (!fullyIntegrated || camper.fullyIntegrated) &&
      (!van || camper.van)
    );
  });

  async function getNextPageCamper() {
    try {
      dispatch(resetFilters());
      await dispatch(fetchCampers()).unwrap();
      toast.success("Campers loaded successfully!");
    } catch {
      toast.error("Failed to load vehicles!");
    }
  }

  return (
    <div className={styles.container}>
      {filteredCampers.length > 0
        ? filteredCampers.map((item, index) => (
            <CamperItem key={`${item.id}-${index}`} data={item} />
          ))
        : null}
      {hasNextPage ? (
        <button
          className={styles.loadMore}
          onClick={getNextPageCamper}
          disabled={isLoading}
        >
          {isLoading ? <Loader /> : "Load more"}
        </button>
      ) : null}
    </div>
  );
}
