import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

// img hosting-1(import)
const img_hosting_token = import.meta.env.VITE_image_upload_token;

const AddInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // img hosting-2
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);

    // img hosting 3(start)
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        // console.log(imgResponse)
        console.log(imgResponse.success);
        if (imgResponse.success) {
          const image = imgResponse.data.display_url;
          const { name, insName, email, seat, category, description, price } = data;
          const newItem = {
            name,
            insName,
            email,
            seat,
            category,
            price: parseFloat(price),
            description,
            image,
          };
          console.log(newItem);
          // img hosting 3(end) & to send data in mongo db(api) here

          axiosSecure.post("/menu", newItem).then((res) => {
            console.log("after posting new item", res.data);
            if (res.data.insertedId) {
              reset();
              let timerInterval;
              Swal.fire({
                title: "Add Classes items is Posting in Server",
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
        }
      });
  };
  console.log(errors);

  //   console.log(img_hosting_token)

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold uppercase text-center">
        Please Add Classes
      </h2>
      <>
        <form onSubmit={handleSubmit(onSubmit)} className="px-4">
          <div className="flex gap-4">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Class Name(academic)*</span>
              </label>
              <input
                {...register("name", { required: true, maxLength: 80 })}
                type="text"
                placeholder="Type here academic name"
                class="input input-bordered w-full "
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Instructor Name*</span>
              </label>
              <input
                {...register("insName", { required: true, maxLength: 80 })}
                type="text"
                placeholder="Type here instructor name"
                class="input input-bordered w-full "
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Instructor Email*</span>
              </label>
              <input
                {...register("email", { required: true, maxLength: 80 })}
                type="text"
                placeholder="Type here instructor email"
                class="input input-bordered w-full "
              />
            </div>
            <div class="form-control w-full">
              <label class="label">
                <span class="label-text">Available Seat*</span>
              </label>
              <input
                {...register("seat", { required: true, maxLength: 80 })}
                type="number"
                placeholder="Type here seat number"
                class="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid grid-cols-2 gap-4 w-">
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={"Pick only class"}
                class="select select-bordered"
              >
                <option disabled>What Want To Select From Option</option>
                <option>instructor</option>
                <option>class</option>
              </select>
            </div>
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text">Price</span>
              </label>
              <input
                {...register("price", { required: true, maxLength: 80 })}
                type="number"
                placeholder="price"
                class="input input-bordered w-full "
              />
            </div>
            </div>
            <div class="form-control w-1/2">
              <label class="label">
                <span class="label-text">Description*</span>
              </label>
              <input
                {...register("description", { required: true, maxLength: 8000 })}
                type="text"
                placeholder="description"
                class="input input-bordered w-full h-32 "
              />
            </div>
          </div>

          <div class="form-control w-full ">
            <label class="label">
              <span class="label-text">Upload Image</span>
            </label>
            <input
              {...register("image", { required: true, maxLength: 80 })}
              type="file"
              class="file-input-info border w-full "
            />
          </div>
          <input
            type="submit"
            value="Add Class"
            className="btn btn-info btn-sm text-wh mt-4"
          />
        </form>
      </>
    </div>
  );
};

export default AddInstructor;
