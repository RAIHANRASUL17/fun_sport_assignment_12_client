import React from "react";
import map from '../../../assets/contact/map.jpg'
import SectionTitle from "../../../Components/SectionTitle";
import '../Featured/Featured.css'

const ContactUs = () => {
  return (
    <div className='mt-12'>
        <SectionTitle
        subHeading={"Explore"}
        heading={"Location & Direction"}
        ></SectionTitle>
      <div className="hero featured-item pt-10 bg-fixed rounded">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={map}
            className="w-1/2 rounded-lg shadow-2xl"
          />
          <div className="left-0 top-0 bg-gradient-to-r from-[#151515] to-[#15151573]">
            <h1 className="text-5xl font-bold text-white">Contact Us</h1>
            <p className="py-6 text-white">
            Bashundhara City, often marketed as Bashundhara City Shopping Complex or Bashundhara City Shopping Mall, it is a shopping mall in Dhaka. The mall is located in Panthapath, near Kawran Bazar, and was opened to the public on 6 August 2004. The building complex is 19 stories tall and covers an area of 17,763 m2 (191,200 sq ft), making it the second largest shopping mall in Bangladesh.
            </p>
            <div className="flex justify-center items-center">
            <button className="btn btn-outline border-0 border-b-4 my-6 text-white">Explore Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
