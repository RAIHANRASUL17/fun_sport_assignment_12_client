import React from 'react';
import usePayment from '../../../hooks/usePayment';
import EnrolledStudentsRow from './EnrolledStudentsRow';

const EnrolledStudents = () => {
    const [payment, isLoading, refetch] = usePayment();
    return (
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
              <EnrolledStudentsRow
                key={item._id}
                item={item}
                index={index}
              ></EnrolledStudentsRow>
            ))}
            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default EnrolledStudents;