import React from 'react'
import AppointmentUserTable from '../AppointmentUserTable';
import Link from 'next/link';

const AppointnmnetTab = ({data}:{
    data:{
        doctorName:string,
        doctorImage:string,
        AppointmentDate:string,
        BookedDate:string,
        Amount:string,
        status:string;
        specialization:string

    }[]
}) => {
  return (

    <>
    {/* Tab Menu */}
    

  
    
      <div
      id="pat_appointments"
      className="tab-pane fade show active"
    >
      <div className="card card-table mb-0">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>Doctor</th>
                  <th>Appt Date</th>
                  <th>Booking Date</th>
                  <th>Amount</th>
                  <th>Follow Up</th>
                  <th>Status</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => {
                  return <AppointmentUserTable data={d} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    </>
    
  )
}

export default AppointnmnetTab