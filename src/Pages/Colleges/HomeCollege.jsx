import axios from "axios";
import React, { useEffect, useState } from "react";
import CollegeCard from "./CollegeCard";

const HomeCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4560/colleges").then((res) => {
      setColleges(res.data);
    });
  }, []);
  const homeColleges = colleges.slice(0,3)
  console.log(homeColleges);

  return (
    <div className="grid grid-cols-1 mx-auto gap-5 md:mx-auto md:grid-cols-2 md:gap-4 lg:grid-cols-3 px-5 my-16">
      {homeColleges.map((collegeData) => (
        <CollegeCard
          key={collegeData._id}
          collegeData={collegeData}
        ></CollegeCard>
      ))}
    </div>
  );
};

export default HomeCollege;
