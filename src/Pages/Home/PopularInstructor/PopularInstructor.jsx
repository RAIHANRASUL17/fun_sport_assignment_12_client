import React from "react";

const PopularInstructor = ({ item }) => {
  const { image, name, description, email } = item;
//   console.log(name);
  return (
    <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="w-full h-60" alt="" />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title text-3xl">{name}</h2>
        <p>{description}</p>
        <p className="font-bold">Email:{email}</p>
      </div>
    </div>
  );
};

export default PopularInstructor;
