import React from "react";
import TitleCard from "../../Layout/Shared/TitleCard";
import SingleCollege from "./SingleCollege";
import useColleges from "../../Hooks/usecolleges";

const Colleges = () => {
  const colleges = useColleges();
  console.log(colleges);
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
