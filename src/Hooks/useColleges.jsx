import axios from "axios";
import React, { useEffect, useState } from "react";

const useColleges = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    axios.get("https://campushive-server.vercel.app/colleges").then((res) => {
      setColleges(res.data);
    });
  }, []);
  return colleges
};

export default useColleges;
