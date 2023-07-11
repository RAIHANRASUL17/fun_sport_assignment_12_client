import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import logo from "../../../assets/logo/logo.jpg"
import ActiveLink from "../../../ActiveLink/ActiveLink";


const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const navOptions = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/instructor">Instructor</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/classes">Classes</ActiveLink>
      </li>
      
      

      {user ? (
        <>
          <li className="my-auto mr-3"><ActiveLink to="/dashboard">
            Dashboard
          </ActiveLink></li>
         

          {user && (
            <>
              <FaUserCircle
                title={user ? user.email : "Github doesn't display email"}
                style={{ fontSize: "2.5rem" }}
                className="my-auto mr-8"
              ></FaUserCircle>{" "}
              
              <img
                src={user?.photoURL}
                title={user?.photoURL}
                alt=""
                style={{ borderRadius: "90%" }}
                className="w-9 h-9 my-auto bg bg-white"
              />
            </>
          )}

          <button
            onClick={handleLogOut}
            className="btn btn-ghost lg:ml-24 my-auto"
            title="You are successfully LogIn"
          >
            LogOut
          </button>
        </>
      ) : (
        <>
          <li  className="lg:ml-96">
            <ActiveLink to="/login">login</ActiveLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-slate-950 max-w-7xl mx-auto lg:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img src={logo} className="w-12 h-12" style={{borderRadius:"0 0 100px 100px"}} alt="" />
          <a className="btn btn-ghost normal-case text-xl text-white">Fun Sport</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
