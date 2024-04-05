import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Chakoutsection = React.lazy(() => import("pages/Chakoutsection"));
const Cartlist = React.lazy(() => import("pages/Cartlist"));
const Whishlist = React.lazy(() => import("pages/Whishlist"));
const Productview = React.lazy(() => import("pages/Productview"));
const MenSection = React.lazy(() => import("pages/MenSection"));
const HomePage = React.lazy(() => import("pages/HomePage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/mensection" element={<MenSection />} />
          <Route path="/productview" element={<Productview />} />
          <Route path="/whishlist" element={<Whishlist />} />
          <Route path="/cartlist" element={<Cartlist />} />
          <Route path="/chakoutsection" element={<Chakoutsection />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
