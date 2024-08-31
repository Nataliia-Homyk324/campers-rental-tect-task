import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../Loader/Loader.jsx";

const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const CampersPage = lazy(() => import("../../pages/CampersPage/CampersPage"));
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CamperDetailsPage = lazy(() =>
  import("../../pages/CamperDetailsPage/CamperDetailsPage")
);
const Features = lazy(() => import("../Features/Features.jsx"));
const Reviews = lazy(() => import("../Reviews/Reviews.jsx"));

const RouteSection = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CampersPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />}>
          <Route path="features" element={<Features />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default RouteSection;
