import React from "react";
import CollegeSection from "./CollegeSection/CollegeSection";
import Gallery from "./GallerySection/Gallery";
import Review from "./ReviewSection/Review";

const Home = () => {
  return (
    <>
      <CollegeSection />
      <Gallery />
      <Review></Review>
    </>
  );
};

export default Home;
