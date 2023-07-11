import React from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  FaWallet,
  FaHome,
  FaBook,
  FaUsers,
  FaUser,
  FaAddressBook,
  FaRProject,
} from "react-icons/fa";
import ActiveLink from "../ActiveLink/ActiveLink";
import SectionTitle from "../Components/SectionTitle";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  // finally admin check
  const [isAdmin] = useAdmin();

  // TODO: isInstructor
  const [isInstructor] = useInstructor();

  const { ID } = useParams();
  console.log("figure out useParams", ID);

  return (
    <>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <SectionTitle
            heading={"Welcome To Dashboard"}
            subHeading={
              "Please Select Your Choice What You Want to Observe To Click from Left side"
            }
          ></SectionTitle>
          <Outlet></Outlet>
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-info text-base-content">
            {isAdmin ? (
              <>
                <h2 className="text-2xl font-bold text-white">
                  Admin Dashboard
                </h2>
                <li>
                  <ActiveLink to="/dashboard/manageUsers">
                    <FaUsers></FaUsers>Manage Users
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/manageClasses">
                    <FaUsers></FaUsers>Manage Classes
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/enrollClasses">
                    <FaWallet></FaWallet>Enroll Classes
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/addInstructor">
                    <FaBook></FaBook> Add Class or Instructor
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/paymentHistory">
                    <FaWallet></FaWallet>Payment History
                  </ActiveLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <h2 className="text-2xl font-bold text-white">
                  Instructor Dashboard
                </h2>
                <li>
                  <ActiveLink to="/dashboard/addClasses">
                    <FaBook></FaBook> Add Class
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/instructorMyClass">
                    <FaBook></FaBook> My Classes
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/feedback">
                    <FaRProject></FaRProject> Receive Feedback
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink to="/dashboard/enrolledStudents">
                    <FaWallet></FaWallet>Enrolled Students Classes
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/feedback">
                    <FaRProject></FaRProject> Receive Feedback
                  </ActiveLink>
                </li>
              </>
            ) : (
              <>
                {/* <!-- Sidebar content here --> */}
                <h2 className="text-2xl font-bold text-white">
                  Student Dashboard
                </h2>
                <li>
                  <ActiveLink to="/classes">
                    <FaAddressBook></FaAddressBook>Select Program
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/myClasses">
                    <FaBook></FaBook> My Selected Classes
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/myEnrollClasses">
                    <FaWallet></FaWallet>My Enroll Classes
                  </ActiveLink>
                </li>
                {/* <li>
                  <ActiveLink to={`/dashboard/payment/:ID`}>
                    <FaWallet></FaWallet> Payment(all)
                  </ActiveLink>
                </li> */}
                <li>
                  <ActiveLink to={`/dashboard/payment/${ID}`}>
                    <FaWallet></FaWallet> Payment(Remove first one)
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/dashboard/paymentHistory">
                    <FaWallet></FaWallet> Payment History
                  </ActiveLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <h2 className="text-2xl font-bold text-white">
              For Eery One Accessible
            </h2>
            <li>
              <ActiveLink to="/">
                <FaHome></FaHome>Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/instructor">
                <FaUser></FaUser>Instructor
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/classes">
                <FaBook></FaBook>Select Class
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
