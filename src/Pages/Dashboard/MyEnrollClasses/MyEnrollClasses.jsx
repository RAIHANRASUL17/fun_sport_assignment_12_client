import React from 'react';
import usePayment from '../../../hooks/usePayment';
import MyEnrollClassesRow from './MyEnrollClassesRow';
import { Helmet } from 'react-helmet-async';

const MyEnrollClasses = () => {
    const [payment, isLoading, refetch] = usePayment();
    return (
       <>
       <Helmet>Fun Sport | Enrolled</Helmet>
        <div>
        <h3 className="text-center text-2xl font-bold uppercase">
          Enrolled Students: {payment?.length}{" "}
        </h3>
  
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Items Name</th>
                <th>Status</th>
                <th>date & time</th>
                <th>Student Email</th>
                <th>Fees</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
  
              {payment?.map((item, index) => (
                <MyEnrollClassesRow
                  key={item._id}
                  item={item}
                  index={index}
                ></MyEnrollClassesRow>
              ))}
              {/* row 2 */}
            </tbody>
          </table>
        </div>
      </div>
       </>
    );
};

export default MyEnrollClasses;