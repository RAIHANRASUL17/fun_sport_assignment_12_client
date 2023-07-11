import React from "react";

const EnrollClassesRow = ({ item, index }) => {
  // console.log(item)
  const { itemsName, orderStatus, date, price, email } = item;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        {itemsName[0]} <br />
        {itemsName[1]}
      </td>
      <td>{orderStatus}</td>
      <td>{date}</td>
      <td>{email}</td>
      <td>${price}</td>
    </tr>
  );
};

export default EnrollClassesRow;
