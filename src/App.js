import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/Components/school/AboutUs";
import OrganizationChart from "./pages/Components/school/OrganizationChart";
import More from "./pages/Components/school/More";
import PhotoLibrary from "./pages/Components/activities/PhotoLibrary";
import Sports from "./pages/Components/activities/Sports";
import Workshops from "./pages/Components/activities/Workshops";
import AdmissionFile from "./pages/Components/admission/AdmissionFile";
import Fees from "./pages/Components/admission/Fees";
import Mentions from "./pages/Mentions";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          {/* General */}
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
          {/* liens de l'ecole*/}
          <Route exact path="/school/aboutus" element={<AboutUs />}></Route>
          <Route
            exact
            path="/school/organization"
            element={<OrganizationChart />}
          ></Route>
          <Route exact path="/school/more" element={<More />}></Route>
          {/* liens des activités */}
          <Route
            exact
            path="/activities/workshops"
            element={<Workshops />}
          ></Route>
          <Route exact path="/activities/sports" element={<Sports />}></Route>
          <Route
            exact
            path="/activities/gallery"
            element={<PhotoLibrary />}
          ></Route>
          {/* lien des modalités */}
          <Route
            exact
            path="/admission/file"
            element={<AdmissionFile />}
          ></Route>
          <Route
            exact
            path="/admission/fees"
            element={<Fees />}
          ></Route>
          <Route
            exact
            path="/mentions"
            element={<Mentions />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
