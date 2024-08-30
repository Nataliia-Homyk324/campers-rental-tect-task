import { useDispatch, useSelector } from "react-redux";
import styles from "./CampersList.module.css";
import {
  selectAllCampers,
  selectHasMore,
  selectIsLoading,
} from "../../redux/catalog/selectors.js";
import { fetchCampers } from "../../redux/catalog/operations.js";
import CamperItem from "../CamperItem/CamperItem.jsx";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader.jsx";

export default function CampersList() {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasMore);
  const campers = useSelector(selectAllCampers);
  const isLoading = useSelector(selectIsLoading);

  async function getNextPageCamper() {
    try {
      await dispatch(fetchCampers()).unwrap();
      toast.success("Campers loaded successfully!");
    } catch {
      toast.error("Failed to load vehicles!");
    }
  }
  return (
    <div className={styles.container}>
      {campers.length > 0
        ? campers.map((item) => <CamperItem key={item.id} data={item} />)
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
