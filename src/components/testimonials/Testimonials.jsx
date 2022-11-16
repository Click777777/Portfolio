import React from "react";
import "./testimonials.css";
import Avatar1 from "../../assets/avatar1.jpg";
import Avatar2 from "../../assets/avatar2.jpg";
import Avatar3 from "../../assets/avatar3.jpg";
import Avatar4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    image: Avatar1,
    name: "Danica Tatiana",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga molestias iusto molestiae. Nemo magnam optio, pariatur repellat quia officiis numquam et quod asperiores dolores culpa accusantium nobis recusandae corrupti.",
  },
  {
    id: 2,
    image: Avatar2,
    name: "Brice Olek ",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga molestias iusto molestiae. Nemo magnam optio, pariatur repellat quia officiis numquam et quod asperiores dolores culpa accusantium nobis recusandae corrupti.",
  },
  {
    id: 3,
    image: Avatar3,
    name: "Diadumenianus Adalet",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga molestias iusto molestiae. Nemo magnam optio, pariatur repellat quia officiis numquam et quod asperiores dolores culpa accusantium nobis recusandae corrupti.",
  },
  {
    id: 4,
    image: Avatar4,
    name: "Rosa María",
    comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores fuga molestias iusto molestiae. Nemo magnam optio, pariatur repellat quia officiis numquam et quod asperiores dolores culpa accusantium nobis recusandae corrupti.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container container_testimonial "
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ image, name, comment }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={image} alt="err" />
              </div>
              <h5>{name}</h5>
              <small>{comment}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
