import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from "react-icons/fa";



const SocialLogin = () => {
  const { signIn, googleSignIn, githubLogin } = useContext(AuthContext);
  /*_______________________________________________*/
  //step-a.1:- go exactly your destination to use location with useLocation
  const navigate = useNavigate();
  let location = useLocation();
  console.log("location check from login", location);
  let from = location.state?.from?.pathname || "/";
  /*_______________________________________________*/
  // googleSignIn
  const handleGoogleLogin = () => {
    googleSignIn(GoogleAuthProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log("----google", loggedUser);
               /*____________________________*/ 
      // create user for (making admin)
      const savedUsers = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoURL: loggedUser.photoURL,
      };
      fetch("https://assignment-12-server-six-rho.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(savedUsers)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log("create user is=",data)
      })
      /*____________________________*/ 
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log(error);
      });
  };

  // handleGithubLogin
  // const [user, setUser] = useState(null);
  const handleGithubLogin = () => {
    console.log("github login");
    githubLogin(GithubAuthProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log("--git", loggedUser);
     /*____________________________*/ 
      // create user for (making admin)
      const savedUsers = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoURL: loggedUser.photoURL,
      };
      fetch("https://assignment-12-server-six-rho.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(savedUsers)
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log("create user is=",data)
      })
      /*____________________________*/ 
        navigate(from, { replace: true });
        setUser(loggedUser);
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col px-10">
      <button onClick={handleGoogleLogin} className="btn btn-primary">
        <FaGoogle className="me-2"></FaGoogle> Login With Google
      </button>
      <button onClick={handleGithubLogin} className="btn btn-primary my-3">
        <FaGithub className="me-2"></FaGithub> Login With Github
      </button>
    </div>
  );
};

export default SocialLogin;
