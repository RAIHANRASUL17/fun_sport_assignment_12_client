import React, { useEffect } from "react";
import {  json, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import { useContext } from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const PopularClasses = ({ item }) => {
  const { image, name, insName, seat, price, _id } = item;

  const {user} = useContext(AuthContext)
  const navigate= useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/login";
  const [disable, setDisable] = useState(true);

useEffect(()=>{
 const selectedData = JSON.parse(localStorage.getItem("select")) || null;
  if(selectedData){
    handleSelect(selectedData)
    localStorage.removeItem("select")
  }
},[])


  const handleSelect = (item) => {
    // console.log('for is checking: ', Id)
    const { image, name, insName, seat, price, _id } = item;
    const selectedItem = {menuItemId: _id, image, name, insName, price, seat, email: user?.email};

    if(!user?.email){
     localStorage.setItem("select", JSON.stringify(item))
      return navigate(from, {replace: true})
     }
      
      // const selectedItem = {menuItemId: _id, image, name, insName, price, seat, email: user.email};
      // console.log(selectedItem)
     
      if(user && user?.email){
          fetch("https://assignment-12-server-six-rho.vercel.app/selected", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(selectedItem)
          })
          .then((res)=>res.json())
          .then((data)=>{
            // console.log(data)
    
            if(data.insertedId){
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item is selected',
                showConfirmButton: false,
                timer: 3000
              })
              // setDisable
              setDisable(true)
            }
          })
        }
       
  }
  return (
    <>
    <Helmet>
      <title>Fun Sport | Popular Classes</title>
    </Helmet>
    <div className="max-w-7xl mx-auto">
      <div className="card w-96 h-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full h-60" alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl uppercase font-bold">{name}</h2>
        <p className="text-lg font-semibold">Instructor = {insName}</p>
        <p className="font-bold">Available Seat= {seat}</p>
        <div className="flex justify-between px-2">
          <h4 className="text-xl text-yellow-600">Price: $ {price}</h4>
          <button  onClick={()=>handleSelect(item)} className="btn btn-info text-white btn-sm">Select</button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default PopularClasses;
