import React from 'react';
import useMenu from '../../../../../hooks/useMenu';
import PopularInstructor from '../../../PopularInstructor/PopularInstructor';
import SectionTitle from '../../../../../Components/SectionTitle';
import PopularClasses from '../../PopularClasses/PopularClasses';
import Instructor from '../../../../Instructor/Instructor';


const Menu = () => {
  const [menu, loading, refetch] = useMenu();
//   console.log(menu)
  const instructors = menu.filter((item) => item.category === "instructor");
  // console.log(instructors)
  const classes = menu.filter((item) => item.category === "class");
  // console.log(classes)
    return (
        <div>
          <SectionTitle heading={"popular classes"} subHeading={"Explore Classes"}></SectionTitle>
           <div className='grid justify-center'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16'>
           {
            classes.map(item =><PopularClasses
            key={item._id}
            item={item}
            ></PopularClasses>)
           }
           </div>
           </div>
           
          <SectionTitle heading={"popular Instructor"} subHeading={"Explore Instructor"}></SectionTitle>
           <div className='grid justify-center'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16'>
           {
            instructors.map(item =><PopularInstructor
            key={item._id}
            item={item}
            ></PopularInstructor>)
    
           }
           </div>
           </div>
        </div>
    );
};

export default Menu;