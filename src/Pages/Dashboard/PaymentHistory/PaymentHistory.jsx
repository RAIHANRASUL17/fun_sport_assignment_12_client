import React, { useEffect, useState } from "react";
import PaymentHistoryRow from "./PaymentHistoryRow";
import usePayment from "../../../hooks/usePayment";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
 //   descending ascending
 const [asc, setAsc] = useState(true);


  //  const [payment, setHistory] = useState();

  //   useEffect(()=>{
  //     // fetch("https://assignment-12-server-six-rho.vercel.app/paymentHistory")

  //     .then((res)=>res.json())
  //     .then((data)=>{
  //         // console.log(data)
  //         setHistory(data)
  //     })
  //   },[])
  

  // usePayment hooks
  const [payment, isLoading, refetch] = usePayment(asc);

 

  return (
    <>
      <Helmet>
        <title>Fun Sport | Payment History</title>
      </Helmet>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-center text-2xl font-bold uppercase">
          Payment History: {payment?.length}{" "}
        </h3>
        <div className="grid my-2">
      {/* ascending- descending */}
          <button onClick={()=>setAsc(!asc)} className="btn btn-info btn-xs text-white">{asc ? "descending" : "ascending"}</button>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>date & time</th>
                <th>Student Email</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {payment?.map((item, index) => (
                <PaymentHistoryRow
                  key={item._id}
                  item={item}
                  index={index}
                ></PaymentHistoryRow>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentHistory;
