import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Feedback = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://assignment-12-server-six-rho.vercel.app/receiveFeedback")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);
  return (
   <div className="grid justify-center items-center">
    <h2 className="text-2xl font-bold mb-2 text-center">Received Admin Feedback</h2>
     <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Applicant Name</th>
            <th>Email</th>
            <th>Feedback(status)</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {items?.map((item, index) => (
            <tr key={item._id}>
              <th>{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td className="text-end">{item.feedback}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </div>
  );
};

export default Feedback;
