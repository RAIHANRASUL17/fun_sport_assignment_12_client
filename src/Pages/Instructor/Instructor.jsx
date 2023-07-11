import React from "react";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Components/SectionTitle";
import { useState } from "react";
import { Link } from "react-router-dom";

const Instructor = () => {
  const [menu, loading, refetch] = useMenu();
  const instructors = menu.filter((item) => item.category === "instructor");
  //   console.log(instructors)

  const [details, setDetails] = useState([]);
  const handleDetails = (Id) => {
    console.log(Id);
    setDetails(Id);
  };

  return (
    <div className="flex flex-col justify-center items-center pt-11">
      <SectionTitle heading={"Instructor page"}></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {instructors.map((instructor, index) => (
              <tr key={instructor._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div
                        className="mask mask-squircle w-24 h-24"
                        style={{ borderRadius: "0 100px 400px" }}
                      >
                        <img
                          src={instructor.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div></div>
                  </div>
                </td>
                <td>{instructor.name}</td>
                <td className="text-end">{instructor.email}</td>
                {/* Handle Details Start */}
                <td>
                  <div>
                    {/* modal start */}
                    {/* The button to open modal */}
                    <label
                      htmlFor="my-modal-5"
                      onClick={() => handleDetails(instructor)}
                      className="btn btn-info btn-sm text-white"
                    >
                      Detail
                    </label>

                    {/* Put this part before </body> tag */}
                    <input
                      type="checkbox"
                      id="my-modal-5"
                      className="modal-toggle"
                    />
                    <div className="modal">
                      <div className="modal-box lg:w-1/2  lg:max-w-5xl">
                        <h3 className="font-bold text-center"></h3>
                        <>
                          <form>
                            <div className="card-body form-control">
                              <div className="grid grid-cols-2 gap-4">
                                <img
                                  className="w-56 h-56"
                                  src={details.image}
                                  alt=""
                                />
                                <div className="w-1/2">
                                  <h3 className="text-3xl font-bold">
                                    {details.name}
                                  </h3>
                                  <h4 className="text-2xl font-bold">
                                    {details.category}
                                  </h4>
                                  <h5 className="text-xl font-bold">
                                    {details.className}
                                  </h5>
                                  <p>{details.email}</p>
                                </div>
                              </div>
                            </div>
                          </form>
                        </>
                        <div className="modal-action">
                          <label htmlFor="my-modal-5" className="btn">
                            close!
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* modal end */}
                  </div>
                </td>
                {/* Handle Details End */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructor;
