import React from "react";
import Banner from "../components/Home/Banner.jsx";
import SubBanner from "../components/Home/SubBanner.jsx";
import MainCategoryContainer from "../components/Home/MainCategoryContainer.jsx";
import ProductCarousel from "../components/Home/ProductCarousel.jsx";

function Homepage() {
  return (
    <>
      <Banner />
      <SubBanner />
      <MainCategoryContainer />
      <ProductCarousel />
    </>
  );
}

export default Homepage;
