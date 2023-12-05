import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Carousel.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import sliderimg1 from "../../Assets/Images/mobilemockup01_final.png";
import sliderimg2 from "../../Assets/Images/mobilemockup02_final.png";
import sliderimg3 from "../../Assets/Images/mobilemockup03_final.png";
import sliderimg4 from "../../Assets/Images/mobilemockup04_final.png";
import sliderimg5 from "../../Assets/Images/mobilemockup05_final.png";

const Carousel = () => {
  return (
    <div className="h-[95vh] bg-secoundary flex justify-center items-center pt-[15.5rem]">
      <div className="containerswiper">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 3,
            },
            // 786: {
            //     slidesPerView: 3,
            // },
          }}
          effect={"coverflow"}
          autoplay={true}
          spaceBetween={-100}
          initialSlide={4}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          // spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={sliderimg2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg1} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg2} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg3} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg4} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg5} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sliderimg5} alt="slide_image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
