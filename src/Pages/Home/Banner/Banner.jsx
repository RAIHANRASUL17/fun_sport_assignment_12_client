import React from "react";

import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.jpg";
import img4 from "../../../assets/home/04.jpg";


const Banner = () => {
  return (
    <div className="container mx-auto">
      <div className="carousel w-full h-[700px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white space-y-7 lg:w-1/2 pl-12">
              <h2 className="text-5xl font-bold uppercase">
               " Please Select Your Program and Enjoy!"
              </h2>
              <p>
              Join our summer sports camp and improve your skills in basketball, soccer, volleyball, and more. Summer sports camp offers the opportunity to enhance skills in various sports activities like basketball, soccer, volleyball.Expert coaches provide personalized training, while making new friends and enjoying outdoor activities in a fun, safe environment.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn bg-red-600 mr-24">
              ❮Explore
            </a>
            <a href="#slide2" className="btn bg-red-600">
              Explore❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn bg-red-600 mr-24">
              ❮Explore
            </a>
            <a href="#slide3" className="btn bg-red-600">
              Explore❯
            </a>
          </div>
        </div>

        <div
          id="slide3"
          className="carousel-item relative w-full overflow-y-hidden"
        >
          <img src={img3} className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn bg-red-600 mr-24">
              ❮Explore
            </a>
            <a href="#slide4" className="btn bg-red-600">
              Explore❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full rounded-xl" />

          <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
            <div className="text-white space-y-7 w-1/2 pl-12">
              <h2 className="text-5xl font-bold">
                Your Choice Our Priority!!!
              </h2>
              <p>
                A toy is an object that's made for a child to play with. Your
                favorite childhood toy might have been a dollhouse, a stuffed
                animal, or a set of blocks. Some toys are specifically designed
                for play, like a small wooden train set or a baby's shape
                sorter.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn bg-red-600 mr-24">
              ❮Explore
            </a>
            <a href="#slide1" className="btn bg-red-600">
              Explore❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
