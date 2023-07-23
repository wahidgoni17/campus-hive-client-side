import axios from "axios";
import React, { useEffect, useState } from "react";
import TitleCard from "../../Layout/Shared/TitleCard";
import CollegeCard from "./CollegeCard";
import SingleCollege from "./SingleCollege";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4560/colleges").then((res) => {
      setColleges(res.data);
    });
  }, []);
  return (
    <>
      <TitleCard title="Our Colleges" />
      <div className="grid grid-cols-1 mx-auto gap-5 md:mx-auto md:grid-cols-2 md:gap-4 lg:grid-cols-3 px-5 my-16">
        {colleges.map((collegeData) => (
          <SingleCollege
            key={collegeData._id}
            collegeData={collegeData}
          ></SingleCollege>
        ))}
      </div>
    </>
  );
};

export default Colleges;
