import React from "react";
import useMenu from "../../../hooks/useMenu";
import ManageClassRow from "./ManageClassRow";

const ManageClasses = () => {
  const [menu, loading, refetch] = useMenu();
  const items = menu?.filter((itemClass) => itemClass.category === "class");
  //    console.log(items)

  return (

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
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items?.map((item, index) => (
            <ManageClassRow
              key={item._id}
              item={item}
              index={index}
              refetch={refetch}
            ></ManageClassRow>
          ))}
          {/* row 2 */}
        </tbody>
      </table>

  
  );
};

export default ManageClasses;
