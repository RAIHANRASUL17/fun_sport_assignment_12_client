import React from "react";

const EnrolledStudentsRow = ({ item, index }) => {
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
      <td className="text-yellow-600 font-semibold text-end">$ {price}</td>
    </tr>
  );
};

export default EnrolledStudentsRow;
