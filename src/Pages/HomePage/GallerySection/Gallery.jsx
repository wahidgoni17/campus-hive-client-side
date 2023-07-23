import React from "react";
import pic1 from "../../../assets/pic1.jpg";
import pic2 from "../../../assets/pic2.jpg";
import pic3 from "../../../assets/pic3.jpg";
import pic4 from "../../../assets/pic4.jpg";
import pic5 from "../../../assets/pic5.jpg";
import pic6 from "../../../assets/pic6.jpg";
import TitleCard from "../../../Layout/Shared/TitleCard";

const Gallery = () => {
  return (
    <div className="my-16">
      <TitleCard title="Meet Our Graduates"></TitleCard>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        <div>
          <img className="h-64 w-96 max-w-full rounded-lg" src={pic1} alt="" />
        </div>
        <div>
          <img className="h-64 w-96 max-w-full rounded-lg" src={pic2} alt="" />
        </div>
        <div>
          <img className="h-64 w-96 max-w-full rounded-lg" src={pic3} alt="" />
        </div>
        <div>
          <img className="h-64 w-96 max-w-full rounded-lg" src={pic4} alt="" />
        </div>
        <div>
          <img className="h-64 w-96 max-w-full rounded-lg" src={pic5} alt="" />
        </div>
        <div>
          <img className="h-64 w-96 max-w-full rounded-lg" src={pic6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
