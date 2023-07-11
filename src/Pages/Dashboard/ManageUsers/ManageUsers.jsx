import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { FaTrashAlt, FaUserAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  
  const [axiosSecure] = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      // const res = await fetch("https://assignment-12-server-six-rho.vercel.app/users");
      // return res.json();
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  //   Delete
  const handleDelete = (Id) => {
    // console.log(Id)
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
        fetch(`https://assignment-12-server-six-rho.vercel.app/users/delete/${Id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

  //  admin
  const handleMakeAdmin = (Id) => {
    // console.log(Id)
    fetch(`https://assignment-12-server-six-rho.vercel.app/users/admin/${Id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("admin has been made");
        }
      });
  };

  //  instructor
  const handleMakeInstructor = (Id) => {
    // console.log(Id)
    fetch(`https://assignment-12-server-six-rho.vercel.app/users/instructor/${Id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("Instructor has been made");
        }
      });
  };



  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-3xl uppercase font-bold">
        Total Users= {users.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Make Instructor</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user?.name}</td>
                <td>{user?.email}</td>


                <td className="uppercase">
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-ghost btn-xs bg-info text-white"
                    >
                      <FaUserShield></FaUserShield>{" "}
                    </button>
                  )}
                </td>


                <td className="uppercase">
                  {user.role === "instructor" ? (
                    "instructor"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user._id)}
                      className="btn btn-ghost btn-xs bg-orange-500 text-white"
                    >
                      <FaUserAlt></FaUserAlt>
                    </button>
                  )}
                </td>






                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-xs bg-red-500 text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
