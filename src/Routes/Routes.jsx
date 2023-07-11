import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Shared/Login/Login';



import Instructor from '../Pages/Instructor/Instructor';
import PrivateRoute from './PrivateRoute';
import Classes from '../Pages/Classes/Classes';
import Dashboard from '../Layout/Dashboard';
import MyClasses from '../Pages/Dashboard/MyClasses/MyClasses';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';
import EnrollClasses from '../Pages/Dashboard/EnrollClasses/EnrollClasses';
import AdminRoute from './AdminRoute';
import AddClasses from '../Pages/Dashboard/AddClasses/AddClasses';
import ManageClasses from '../Pages/Dashboard/ManageClasses/ManageClasses';
import ManageUsers from '../Pages/Dashboard/ManageUsers/ManageUsers';
import Feedback from '../Pages/Dashboard/Feedback/Feedback';
import InstructorMyClass from '../Pages/Dashboard/InstructorMyClass/InstructorMyClass';
import MyEnrollClasses from '../Pages/Dashboard/MyEnrollClasses/MyEnrollClasses';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import SignUp from '../Pages/Shared/SignUp/SignUp';
import InstructorRoute from './InstructorRoute';
import EnrolledStudents from '../Pages/Dashboard/EnrolledStudents/EnrolledStudents';
import AddInstructor from '../Pages/Dashboard/AddInstructor/AddInstructor';




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
           path: "/" ,
           element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "instructor",
          element: <Instructor></Instructor>
        },
        {
          path: "classes",
          element: <Classes></Classes>
        },
      ],
    },
    // Dashboard
    {
       path: "dashboard",
       element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
       children:[
        {
          path: "myClasses",
          element:<MyClasses></MyClasses>
        },
        {
          // path:"payment",
          path:"payment/:ID",
          element: <Payment></Payment>
        },
        {
          path: "paymentHistory",
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: "myEnrollClasses",
          element: <MyEnrollClasses></MyEnrollClasses>
        }
        ,
        {
          path: "enrollClasses",
          element: <AdminRoute><EnrollClasses></EnrollClasses></AdminRoute>
        },
        {
          path: "enrolledStudents",
          element: <InstructorRoute><EnrolledStudents></EnrolledStudents></InstructorRoute>
        }
        ,
        {
          path: "manageUsers",
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: "addInstructor",
          element: <AdminRoute><AddInstructor></AddInstructor></AdminRoute>
        },
        {
          path: "addClasses",
          element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
        },
       
        {
          path: "manageClasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
        },
        {
          path: "feedback",
          element: <InstructorRoute><Feedback></Feedback></InstructorRoute>
        },{
          path: "instructorMyClass",
          element: <InstructorMyClass></InstructorMyClass>
        }
       ]
    }
  ]);
  export default router;
