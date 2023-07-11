import React from 'react';

const PaymentHistoryRow = ({item, index}) => {
    // console.log(item)
    const{itemsName, orderStatus, date, price, email} = item;
    return (
        <tr>
        <td>{index+1}</td>
        <td>{date}</td>
        <td>{email}</td>
        <td>$<span className='text-yellow-600 font-semibold text-end'>{price}</span></td>
      </tr>
    );
};

export default PaymentHistoryRow;