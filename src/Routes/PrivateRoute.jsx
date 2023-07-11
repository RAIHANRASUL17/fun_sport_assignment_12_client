import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';


const PrivateRoute = ({children}) => {
    // step-B.2: remove loading to reduce login
    const {user, loading} = useContext(AuthContext)
    // step-B.3: remove loading to reduce login
    if(loading){
        return <progress className="progress progress-info w-56" value="100" max="100"></progress>
    }
    //step-a.0:- go exactly your destination to use location with useLocation
    let location = useLocation();
    // console.log('location check from privateRoute',location)
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }}  replace></Navigate>
};

export default PrivateRoute;