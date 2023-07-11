import React from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ManageClassRow = ({ item, index, refetch }) => {
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

  // Modal feedback

  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const handleFeedback = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const feedback = form.description.value;
    // console.log(description);
    // to send data in db have to make object
    const objectMaking = {
      name,
      email,
      feedback,
    };

    axiosSecure.post("/feedback", objectMaking).then((res) => {
      console.log("after posting new item", res.data);
      if (res.data.insertedId) {
        let timerInterval;
        Swal.fire({
          title: "Feedback has been send to INSTRUCTOR",
          html: "I will close in <b></b> milliseconds.",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      }
    });

    form.reset();
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

      <td>
        {/* modal start */}
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn btn-info btn-sm text-white">
          Feed Back
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box lg:w-1/2  lg:max-w-5xl">
            <h3 className="font-bold text-center">Feed Back</h3>
            <>
              <form onSubmit={handleFeedback}>
                <div className="card-body">
                  <div className="grid gap-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Applicant Name</span>
                      </label>
                      <input
                        name="name"
                        type="text"
                        placeholder="Your Name Please"
                        defaultValue={user?.displayName}
                        className="input input-bordered"
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Applicant Email</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        defaultValue={email}
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">YOUR FEEDBACK</span>
                      </label>
                      <input
                        name="description"
                        type="text"
                        placeholder="Description"
                        className="input input-bordered h-20"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      type="submit"
                      value="Send Feed Back"
                      className="btn btn-info"
                    />
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
      </td>
    </tr>
  );
};

export default ManageClassRow;
