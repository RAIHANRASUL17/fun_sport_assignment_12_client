import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// react hook from
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import signUp from "../../../assets/logo/Illustration.svg";
import SocialLogin from "../Login/SocialLogin";
import Swal from "sweetalert2";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  /*__________________________________________________________________*/
  //step-a.1:- go exactly your destination to use location with useLocation
  const navigate = useNavigate();
  let location = useLocation();
  console.log("location check from login", location);
  let from = location.state?.from?.pathname || "/";
  /*_________________________________________________________________*/
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // updateProfile
        updateUserProfile(data.name, data.photoURL).then(() => {
          /*-----------------------------------------------------------*/
          // create user for (making admin)
          const savedUsers = { name: data.name, email: data.email };
          fetch("https://assignment-12-server-six-rho.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(savedUsers),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log("create user is=", data);
            });
          /*----------------------------------------------------------------*/
          console.log("user profile info update");
          reset();
          Swal.fire({
            title: "Update Profile and Create Users",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        });
        // navigate to login
        navigate("/login");
        // navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left w-1/2">
          <h1 className="text-5xl font-bold">Please sign Up!!!</h1>
          <div className="py-6">
            <img src={signUp} alt="" />
          </div>
        </div>
        <div className="w-1/2 card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="input input-bordered"
              />
              {errors.name && (
                <span className="text-red-500">This name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-500">The email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[!@#$&*])/,
                })}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password && (
                <p className="text-red-500">The password is required</p>
              )}
               {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one special character.
                  </p>
                )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </form>
          <div>
            <SocialLogin></SocialLogin>
          </div>
          <h3 className="mx-auto mb-3 text-center">
            Already Have an Account? Please{" "}
            <Link to="/login" className="text-blue-500 font-bold ">
              Login
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
