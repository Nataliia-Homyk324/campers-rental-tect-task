import { useSelector } from "react-redux";
import { selectFavoriteList } from "../../redux/favorite/selectors.js";
import CamperItem from "../CamperItem/CamperItem.jsx";

export default function FavoriteCampersList() {
  const favoriteList = useSelector(selectFavoriteList);

  return (
    <div>
      <h1>Your Favorite Campers</h1>
      <div>
        {favoriteList.length > 0 ? (
          favoriteList.map((camperId) => (
            <CamperItem key={camperId} data={{ id: camperId }} />
          ))
        ) : (
          <p>No favorite campers yet.</p>
        )}
      </div>
    </div>
  );
}
