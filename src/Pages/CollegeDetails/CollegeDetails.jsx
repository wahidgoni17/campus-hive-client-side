import React from "react";
import { useLoaderData } from "react-router-dom";
import TitleCard from "../../Layout/Shared/TitleCard";

const CollegeDetails = () => {
  const collegeInfo = useLoaderData();
  console.log(collegeInfo);
  const {
    _id,
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    events_details,
    research_works,
    sports_categories,
    college_rating,
  } = collegeInfo;
  return (
    <>
      <TitleCard title="college information"></TitleCard>
      <div className="my-10 flex flex-col items-center md:flex-row gap-5">
        <img className="w-[500px] h-full" src={college_image} alt="" />
        <div className="space-y-2 px-5">
          <p className="text-2xl">College Name: {college_name}</p>
          <p className="text-2xl">College Ratings: {college_rating}</p>
          <p className="text-2xl">Research History: {research_history}</p>
          <p className="text-2xl">Admission Dates: {admission_dates}</p>
          <p className="text-2xl">
            Admission Process: Available in Admission Section
          </p>
        </div>
      </div>
      <div className="px-10 flex flex-col items-center justify-around md:flex-row gap-5">
        <div className="mb-4 text-2xl">
          <p className="mb-1 font-normal">Events :</p>
          {events.map((eventData, index) => (
            <li key={index} className="pl-3 font-normal">
              {eventData}
            </li>
          ))}
        </div>
        <div className="mb-4 text-2xl">
          <p className="mb-1 font-normal">Sports :</p>
          {sports_categories.map((sports, index) => (
            <li key={index} className="pl-3 font-normal">
              {sports}
            </li>
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold text-center">Research Works</h1>
        <div className="flex flex-col justify-around items-center md:flex-row my-10 gap-10">
          {research_works.map((work, index) => (
            <div className="space-y-4" key={index}>
              <p className="text-2xl">Title: {work.title}</p>
              <p className="text-2xl flex">Authors: {work.authors}</p>
              <p className="text-2xl">Publication Date: {work.publication_date}</p>
              <p className="text-2xl">Journal: {work.journal}</p>
              <p className="text-2xl">Abstract: {work.abstract}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CollegeDetails;
