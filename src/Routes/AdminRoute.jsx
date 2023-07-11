import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {

const {user, loading} = useContext(AuthContext)
let location = useLocation();

const [isAdmin, isAdminLoading] = useAdmin()

if(loading || isAdminLoading){
    return <progress className="progress progress-info w-56" value="100" max="100"></progress>
}



if(user && isAdmin){
    return children;
}
return <Navigate to='/' state={{ from: location }}  replace></Navigate>
};

export default AdminRoute;