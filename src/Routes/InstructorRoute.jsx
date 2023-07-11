import React from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import useInstructor from '../hooks/useInstructor';

const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    let location = useLocation();
    
    const [isInstructor, isInstructorLoading] = useInstructor();
    
    if(loading || isInstructorLoading){
        return <progress className="progress progress-info w-56" value="100" max="100"></progress>
    }
    
    
    
    if(user && isInstructor){
        return children;
    }
    return <Navigate to='/' state={{ from: location }}  replace></Navigate>
};

export default InstructorRoute;