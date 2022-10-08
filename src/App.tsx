import React from "react";
import { Routes, Route } from "react-router-dom";
import { changeTabTitle } from "./utils/changeTabTitle";
import NavigationBar from "./components/Navbar";
import PageFooter from "./components/PageFooter";
import AboutMe from "./components/AboutMe";

function App() {
  changeTabTitle("Home");

  return (
    <React.Fragment>
      <div className="w-3/6 mx-auto">
        <NavigationBar />
      </div>
      <Routes>
        {/* <Route path="/my-fav-movies-fe" element={<Landing />} /> */}
        {/* <Route path="/my-fav-movies-fe/myfavs" element={<MyFavorites />} /> */}
        {/* <Route path="/my-fav-movies-fe/createlist" element={<ListCreator />} /> */}
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>

      <PageFooter />
    </React.Fragment>
  );
}

export default App;
