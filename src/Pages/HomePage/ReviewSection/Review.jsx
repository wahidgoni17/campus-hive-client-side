import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import TitleCard from "../../../Layout/Shared/TitleCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://campushive-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="my-20 ">
      <TitleCard title="Testimonials"></TitleCard>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper rounded-2xl px-10 bg-gradient-to-r from-slate-50 to-green-100">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-24 my-16 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 200 }}
                value={4.3}
                readOnly
              />
              <FaQuoteLeft className="text-6xl my-5"></FaQuoteLeft>
              <h1>{review.college_Name}</h1>
              <p className="py-5 text-xl">{review.review}</p>
              <h3 className="text-2xl uppercase text-orange-500">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
