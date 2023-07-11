import React from 'react';
import { useState } from 'react';

const InstructorMyClassRow = ({ item, index, refetch }) => {
    const { image, name, insName, email, seat, price } = item;
  //   console.log(item);
  const [status, setStatus] = useState(true);
  const [disable, setDisable] = useState(false);
  const handleStatus = () => {
    // console.log("pending")
    setStatus("pending");
    setDisable(true);
  };
  const handleStatus2 = () => {
    setStatus("approve");
    setDisable(true);
  };
  const handleStatus3 = () => {
    setStatus("deny");
    setDisable(true);
  };
    return (
        <tr>
      <td>{index + 1}</td>
      <td>
        <div>
          <div className="avatar">
            <div className="mask mask-circle w-24 h-24">
              <img src={image} />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>
        <div>
          <div className="font-bold text-xl">{insName}</div>
          <div className="text-sm font-semibold">{email}</div>
        </div>
      </td>
      <td>
        <div className="text-center">
          <div className="font-bold">SEAT: {seat}</div>
          <div className="text-sm font-semibold text-yellow-600">${price}</div>
        </div>
      </td>
      <td>
        <h2 className="text-xl font-bold uppercase">{status ? status : ""}</h2>
      </td>
      <td>
        <div className="grid grid-rows-3 gap-2 text-white">
          <div>
            <button
              onClick={() => handleStatus(false)}
              disabled={disable}
              className="btn btn-info  btn-xs text-white"
            >
              Pending
            </button>
          </div>
          <div>
            <button
              onClick={() => handleStatus2(false)}
              disabled={disable}
              className="btn btn-info btn-xs text-white"
            >
              Approve
            </button>
          </div>
          <div>
            <button
              onClick={() => handleStatus3(false)}
              disabled={disable}
              className="btn btn-info px-5 text-white btn-xs"
            >
              Deny
            </button>
          </div>
        </div>
      </td>
    </tr>
    );
};

export default InstructorMyClassRow;