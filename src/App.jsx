import React, { useState } from "react";
import UseCollegeCart from "../../Hooks/UseCollegeCart";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios"; // Import axios to make API requests

const CollegeTable = () => {
  const collegeCart = UseCollegeCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [college_name, setCollegeName] = useState(""); // 1. State to store the college name
  const openModal = (collegeName) => {
    setIsModalOpen(true);
    setCollegeName(collegeName); // 2. Set the college name when the link is clicked
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { register, reset, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    console.log(data);
    axios.post("http://localhost:4560/review", {
      name: data.name,
      College_Name: college_name, // 3. Pass the college_name along with the review data
      Review: data.review
    })
    .then((data) =>{
        console.log(data.data);
        if (data.data.insertedId) {
            reset();
            Swal.fire("Successfully!", "Your Review is Posted", "success");
            setIsModalOpen(false);
        }
    });
  };

  // Rest of the component code remains unchanged
  // ...
};

export default CollegeTable;
