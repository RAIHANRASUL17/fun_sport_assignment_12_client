import React from 'react';
import useMenu from '../../../hooks/useMenu';
import InstructorMyClassRow from './InstructorMyClassRow';

const InstructorMyClass = () => {
    const [menu, loading, refetch] = useMenu();
    const items = menu?.filter((itemClass) => itemClass.category === "class");
    //    console.log(items)
    return (
       <>
       <h3 className='text-3xl font-bold uppercase text-center mb-3'>Total Enrolled Students: {items?.length}</h3>
        <div className="overflow-x-hidden flex justify-center items-center w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Image & Class Name</th>
            <th>Instructor Name & Email</th>
            <th>Seat & price</th>
            <th>Status</th>
            <th>Click</th>
          </tr>
        </thead>
        <tbody>

          {/* row 1 */}
          {items?.map((item, index) => (
            <InstructorMyClassRow
              key={item._id}
              item={item}
              index={index}
              refetch={refetch}
            ></InstructorMyClassRow>
          ))}
          {/* row 2 */}
        </tbody>
      </table>
    </div>
       </>
    );
};

export default InstructorMyClass;