import React from "react";
import school from "../../../assets/about/school.jpg";
import field from "../../../assets/about/field.jpg";
import playing from "../../../assets/about/playing.jpg";

const About = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center bg-gray-300 rounded mt-12">
        About Us Briefly
      </h1>
      <div className="hero lg:h-[500px] bg-base-300 mb-5">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={school} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={field}
              className="w-1/2 rounded-lg shadow-2xl absolute right-16 top-1/3 p-2"
            />
            <img
              src={playing}
              className="w-1/2 rounded-lg shadow-2xl absolute bottom-1/2 left-10"
            />
          </div>

          <div className="lg:w-1/2 space-y-3 p-4">
            <h3 className="text-3xl font-bold">About Us</h3>
            <h1 className="text-3xl font-bold">
              Join and Enjoy with keep your body fit!
            </h1>
            <p className="py-2">
            Summer sports camps offer an immersive experience with coaching, facilities, and team building activities to improve skills and fitness levels.sSummer sports camps can motivate and inspire athletes to improve their skills, fitness, and teamwork in a supportive environment.
            </p>
            <div className="flex justify-center items-center">
            <button className="btn btn-outline border-0 border-b-4 border-b-cyan-400 lg:my-6 font-bold">Explore Us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
