import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from './useAuth';

const UseCollegeCart = () => {
    const {user} = useAuth()
    const [collegeCart, setCollegeCart] = useState([]);
  useEffect(() => {
    axios.get(`https://campushive-server.vercel.app/collegeCart?email=${user?.email}`)
    .then((res) => {
      setCollegeCart(res.data);
    });
  }, [user]);
  return collegeCart
};

export default UseCollegeCart;