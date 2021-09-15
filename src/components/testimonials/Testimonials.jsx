import { ArrowDownwardSharp } from "@material-ui/icons";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./testimonials.scss";
SwiperCore.use([EffectCoverflow,Pagination]);


// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"



const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisi aceat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img: "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magn ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img: "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elt magnam dolorem",
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>

      <div  className="container" >
      <Swiper
       effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} autoplay={true} allowTouchMove={true} coverflowEffect={{
        "rotate": 50,
        "stretch": 0,
        "depth": 100,
        "modifier": 1,
        "slideShadows": true,
        
      }} pagination={true} className="mySwiper"
      >
        {data.map((item) => (
          <SwiperSlide  className="slide" >
            {" "}
            <div className={item.featured ? "card featured" : "card"}>
              <div className="top">
                <ArrowDownwardSharp />
                <img src={item.img} className="user" alt="" />
              </div>
              <div className="center">{item.desc}</div>
              <div className="bottom">
                <h1> {item.name} </h1>
                <h3>{item.title}</h3>
              </div>
            </div>{" "}
          </SwiperSlide>
        ))}
        
      </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
