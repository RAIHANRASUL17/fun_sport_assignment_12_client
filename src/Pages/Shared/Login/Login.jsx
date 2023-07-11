import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
// react simple react captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
import login from "../../../assets/logo/Illustration.svg";


const Login = () => {
  const [disable, setDisable] = useState(true);
  const { signIn } = useContext(AuthContext);
  /*_______________________________________________*/
  //step-2: go exactly your destination to use location with useLocation
  const navigate = useNavigate();
  let location = useLocation();
  
  console.log("location check from login", location);

  let from = location.state?.from?.pathname || "/";
  /*_______________________________________________*/

  // captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleValidateCaptcha = (event) => {
    const user_captcha_value = event.target.value;

    // console.log(user_captcha_value)
    if (validateCaptcha(user_captcha_value) == true) {
      // alert('Captcha Matched');
      setDisable(false);
      Swal.fire({
        title: "Login is Processing Click On Ok then Press Login",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } else {
      setDisable(true);
      // alert("Captcha Does Not Match");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // signIn/Login
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        // step-3: for location
        navigate(from, { replace: true });
        // for clear form
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Fun Sports | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-2">Please Login!!!</h1>
            <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    name="password"
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    name="captcha"
                    type="text"
                    placeholder="Type the text captcha above"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={disable}
                    // disabled={false}
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <div>
              <SocialLogin></SocialLogin>
            </div>
            <h3 className="text-center mb-3">
              New to here? Please{" "}
              <Link to="/signUp" className="text-blue-500">
                Sign-Up/Resister
              </Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
