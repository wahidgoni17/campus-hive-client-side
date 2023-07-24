import React, { useState } from "react";
import UseCollegeCart from "../../Hooks/UseCollegeCart";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";

const CollegeTable = () => {
  const { user } = useAuth();
  const collegeCart = UseCollegeCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [college_name, setCollegeName] = useState("");
  const openModal = (collegeName) => {
    setIsModalOpen(true);
    setCollegeName(collegeName);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:4560/reviews", {
        name: user?.displayName,
        college_Name: college_name,
        review: data.review,
      })
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          reset();
          Swal.fire("Successfully!", "Your Review is Posted", "success");
          setIsModalOpen(false);
        }
      });
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10 mx-5">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                College Name
              </th>
              <th scope="col" className="px-6 py-3">
                Candidate Name
              </th>
              <th scope="col" className="px-6 py-3">
                Subject
              </th>
              <th scope="col" className="px-6 py-3">
                Phone No.
              </th>
              <th scope="col" className="px-6 py-3">
                Date of Birth
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {collegeCart.map((collegeRow) => (
            <tbody key={collegeRow._id}>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {collegeRow.College_Name}
                </th>
                <td className="px-6 py-4">{collegeRow.name}</td>
                <td className="px-6 py-4">{collegeRow.Subject}</td>
                <td className="px-6 py-4">{collegeRow.Phone}</td>
                <td className="px-6 py-4">{collegeRow.Date_of_Birth}</td>
                <td className="px-6 py-4">
                  <a
                    onClick={() => openModal(collegeRow.College_Name)}
                    className="font-medium text-blue-600 cursor-pointer dark:text-blue-500 hover:underline"
                  >
                    Add Review
                  </a>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        {isModalOpen && (
          <div
            id="authentication-modal"
            tabIndex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          >
            <div className="relative w-full max-w-md bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                onClick={closeModal}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="px-20 py-10 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Add Review
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative z-0 w-full mb-6 group">
                    <textarea
                      id="message"
                      rows="4"
                      {...register("review")}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Write your Review here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Post
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CollegeTable;
