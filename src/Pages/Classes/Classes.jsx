import React from 'react';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import ClassesRow from './ClassesRow';

const Classes = () => {
  const [menu, loading, refetch] = useMenu();
  const classes = menu?.filter((item) => item.category === "class");
    // console.log(classes)
 
    return (
        <div className="flex flex-col justify-center items-center w-full pt-11">
        <SectionTitle heading={"Classes page"}></SectionTitle>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Program Name</th>
                <th>Instructor Name</th>
                <th>Available Seat</th>
                <th>Price</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                classes.map((item, index)=><ClassesRow 
                item={item}
                key={item._id}
                index={index}
                ></ClassesRow>)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Classes;