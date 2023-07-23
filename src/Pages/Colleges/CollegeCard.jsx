import React from "react";

const CollegeCard = ({ collegeData }) => {
  console.log(collegeData);
  const {
    college_image,
    college_name,
    admission_dates,
    events,
    research_history,
    events_details,
    research_works,
    sports_categories,
    college_rating,
  } = collegeData;
  const sportSlice = sports_categories.slice(0, 3);
  return (
    <>
      <div className="max-w-sm bg-gradient-to-r from-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg h-64 w-full" src={college_image} alt="" />
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {college_name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {research_history}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Admission Date : {admission_dates}
          </p>
          <div className="mb-4">
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Events :
            </p>
            {events.map((eventData, index) => (
              <li
                key={index}
                className="pl-3 font-normal text-gray-700 dark:text-gray-400"
              >
                {eventData}
              </li>
            ))}
          </div>
          <div className="mb-4">
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              Sports :
            </p>
            {sportSlice.map((sports, index) => (
              <li
                key={index}
                className="pl-3 font-normal text-gray-700 dark:text-gray-400"
              >
                {sports}
              </li>
            ))}
          </div>
          <div className="text-end">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeCard;
