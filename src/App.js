import React from "react";
import HomePage from "./components/Home/HomePage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe";
import Navbar from "./components/Asset/Navbar/Navbar";
import Test from "./components/Test/Test";
import Search from "./components/Search/Search";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/recipe" element={<Recipe />} />
        <Route exact path="/search" element={<Search />} />
        {/* <Route exact path="/test" element={<Test />} /> */}
      </Routes>
    </>
  );
};
export default App;

// demo website
// https://www.allrecipes.com
// https://www.allrecipes.com/recipe/285749/brown-butter-apple-crisp-bars/
