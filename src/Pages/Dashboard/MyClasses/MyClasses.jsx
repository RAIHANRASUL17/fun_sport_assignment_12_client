import React, { useContext, useEffect, useState } from "react";
import useSelected from "../../../hooks/useSelected";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const MyClasses = () => {
  const [selected, isLoading, refetch] = useSelected();
  console.log(selected);

  // /*___________________________________________________________*/
  // const [selected, setSelected] = useState([]);
  // const {user} = useContext(AuthContext)
  // useEffect(()=>{
  //   fetch(`https://assignment-12-server-six-rho.vercel.app/selected?email=${user?.email}`)
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     // console.log(data)
  //     setSelected(data)
  //   })
  // },[])
  //  /*___________________________________________________________*/

  // const [reduce, setReduce] = useState([]);

  // Delete
  const handleDelete = (Id) => {
    // console.log(Id)

    // const find = selected.find(item => item.seat)
    // console.log(find)

    // // const updatedArray = selected.filter(item => item.id !== Id);
    // // console.log("35 delete",updatedArray)
    // setReduce(updatedArray);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-12-server-six-rho.vercel.app/selected/delete/${Id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();

              // const remaining = selected.filter(item => item._id !== Id);
              // setSelected(remaining);

              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Fun Sport | my classes</title>
      </Helmet>
      <div className="w-full flex flex-col justify-center items-center">
        <h3 className="text-3xl font-bold text-center mb-3 uppercase">
          My Classes Section
        </h3>
        <h3 className="text-3xl font-bold text-center mb-3">
          Total Selected Program: {selected?.length}
        </h3>
        <>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Program Name</th>
                  <th>Instructor</th>
                  <th>Charge</th>
                  <th>Pay</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {selected.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-8 h-8">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.insName}</td>

                    <td className="text-end">$ {item.price}</td>
                    <td className="text-end">
                      <Link to={`/dashboard/payment/${item._id}`}>
                        <button className="btn btn-info text-white btn-sm px-4 ">
                          Pay
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost btn-sm bg-red-500 px-4 text-white"
                      >
                        <FaTrashAlt></FaTrashAlt>
                      </button>
                    </td>
                  </tr>
                ))}

                {/* row 2 */}
              </tbody>
            </table>
          </div>
        </>
      </div>
    </>
  );
};

export default MyClasses;
