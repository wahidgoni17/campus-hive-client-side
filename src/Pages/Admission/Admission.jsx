import React from "react";
import TitleCard from "../../Layout/Shared/TitleCard";
import useColleges from "../../Hooks/usecolleges";
import NameCard from "./NameCard";

const Admission = () => {
  const colleges = useColleges();
  return (
    <>
      <TitleCard title="Take Admission"></TitleCard>
      <div className="grid grid-cols-1 mx-auto gap-5 md:mx-auto md:grid-cols-2 md:gap-4 lg:grid-cols-3 px-5 my-16">
        {colleges.map((collegeData) => (
          <NameCard key={collegeData._id} collegeData={collegeData}></NameCard>
        ))}
      </div>
    </>
  );
};

export default Admission;
