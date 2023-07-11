import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import img6 from "../../../assets/home/slide6.jpg";
import img7 from "../../../assets/home/slide7.jpg";
import img8 from "../../../assets/home/slide8.jpg";
import img9 from "../../../assets/home/slide9.jpg";
import img10 from "../../../assets/home/slide10.jpg";
import img11 from "../../../assets/home/slide11.jpg";
import img12 from "../../../assets/home/slide12.jpg";
import img13 from "../../../assets/home/slide13.jpg";

import SectionTitle from "../../../Components/SectionTitle";

const Category = () => {
  return (
    <>
      <section>
        <div>
          <SectionTitle
          subHeading = {"Explore Program"}
          heading = {"Taking Admission"}
          >
          </SectionTitle>
        </div>

      {/* sweep slider part */}
        <Swiper
          slidesPerView={2.5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper lg:mt-16 mt-10 lg:mb-24"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            gymnastics
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            martial arts
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            wrestling
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            boxing
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            hockey
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            volleyball
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            swimming
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            golf
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            tennis
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img10} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            baseball
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            basketball
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            football
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img13} alt="" />
            <p className="lg:text-3xl lg:text-white uppercase font-bold lg:-mt-16 text-center">
            cricket
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
