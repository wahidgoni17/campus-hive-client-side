import React from "react";
import SearchBar from "./SearchBar";
import TitleCard from "../../../Layout/Shared/TitleCard";
import HomeCollege from "../../Colleges/HomeCollege";

const CollegeSection = () => {
  return (
    <>
      <TitleCard title="Explore Colleges" />
      <SearchBar />
      <HomeCollege />
    </>
  );
};

export default CollegeSection;
