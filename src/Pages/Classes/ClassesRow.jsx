import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassesRow = ({item, index}) => {
    //    console.log(item);
  const { image, name, insName, price, seat, category, _id } = item;
  const {user} = useContext(AuthContext)
  const navigate= useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/login";
  const [disable, setDisable] = useState(true);

const handleSelect = (Id) => {
  // console.log('for is checking: ', Id)
  if(!user?.email){
    return navigate(from, {replace: true})
   }
    
    const selectedItem = {menuItemId: _id, image, name, insName, price, seat, email: user.email};
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

console.log(item)

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div
              className="mask mask-squircle w-24 h-24"
              style={{ borderRadius: "0 100px 400px" }}
            >
              <img src={item.image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{item.name}</td>
      <td>{item.insName}</td>
      <td >{item.seat}</td>
      <td >$ {item.price}</td>

      <td>
        <button  onClick={()=>handleSelect(item)} className="btn btn-info text-white btn-sm">Select</button>
      </td>
    </tr>
  );
};

export default ClassesRow;
