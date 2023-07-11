import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import img from '../../../assets/home/school.jpg'
import './Featured.css'

const Featured = () => {
    return (
       
            <div className='featured-item pt-10 bg-fixed text-white rounded'>
            <SectionTitle
            subHeading="Observe Now"
            heading= "Our Featured"
            ></SectionTitle>
            <div className='lg:flex space-x-4 py-20 px-auto lg:px-36 md:px-24 bg-slate-500 bg-opacity-50'>
                <div className='w-1/2'>
                    <img src={img} alt="" />
                </div>
                <div className='text-white lg:w-1/2'>
                    <p>Star on July, 2023</p>
                    <h3 className='text-3xl uppercase'>more effective lessons provide!</h3>
                    <p>Summer sports camps offer structured activities, instruction from experienced coaches, socialization opportunities, and a chance to develop athletic skills.These camps also promote physical fitness, teamwork, and healthy competition, while providing a fun and memorable summer experience for children.Summer sports camps typically provide a structured program led by experienced coaches, with access to athletic facilities and team-building activities.</p>
                    <div className='flex justify-center items-center'>
                    <button className="btn btn-outline border-0 border-b-4 my-6 text-white">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
  
    );
};

export default Featured;