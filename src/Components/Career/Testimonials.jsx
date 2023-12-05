import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "./Testimonials.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Pagination } from "swiper";

import img1 from "../../Assets/carrers/testimonials/1.png";
import img2 from "../../Assets/carrers/testimonials/2.png";
import img3 from "../../Assets/carrers/testimonials/3.png";
import img4 from "../../Assets/carrers/testimonials/4.png";
import img5 from "../../Assets/carrers/testimonials/5.png";
// import Testimonial from './Testimonial';

const Testimonials = () => {
    return (
        <div className="h-[100vh] min-h-fit bg-secoundary flex justify-center items-center containerswiper-career">
            <div className="h-full swiper-career">
                <Swiper
                    pagination={true} modules={[Pagination]} className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={img1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div >

    )
}

export default Testimonials