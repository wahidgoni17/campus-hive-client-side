import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const searchRef = useRef(null);
  const [college, setCollege] = useState([]);
  const [search, setSearch] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(searchRef.current.value);
  };
  useEffect(() => {
    axios.get(`http://localhost:4560/colleges?search=${search}`).then((res) => {
      setCollege(res.data);
    });
  }, [search]);
  return (
    <>
      <section className="mt-5 mb-8">
        <form onSubmit={handleSearch} className="text-center px-20">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              ref={searchRef}
              type="search"
              id="default-search"
              className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Colleges"
              required
            />
          </div>
          <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-[16px] mt-3 px-5 py-2.5 text-center">
            Search
          </button>
        </form>
      </section>
      {search === "" ? (
        <></>
      ) : (
        <>
          {college.map((collegeItem) => (
            <div
              key={collegeItem._id}
              className="max-w-sm h-full bg-gradient-to-r from-slate-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-t-lg h-64 w-full"
                src={college[0].college_image}
                alt=""
              />
              <div className="p-5">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {college[0].college_name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {college[0].research_history}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Admission Date : {college[0].admission_dates}
                </p>
                <div className="text-end mt-5">
                  <Link to={`/collegeDetails/${collegeItem._id}`}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SearchBar;
