import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const UseCollegeCart = () => {
    const {user} = useAuth()
    const [collegeCart, setCollegeCart] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:4560/collegeCart?email=${user?.email}`)
    .then((res) => {
      setCollegeCart(res.data);
    });
  }, [user]);
  return collegeCart
};

export default UseCollegeCart;