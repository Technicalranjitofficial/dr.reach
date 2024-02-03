import React from "react";



const status = {
    "Pending":"badge-warning",
    "Completed":"badge-success",
    "Rejected":"badge-danger",
    "Confirmed":"badge-primary"
}

const AppointmentUserTable = ({data}:{
    data:{
        doctorName:string,
        doctorImage:string,
        AppointmentDate:string,
        BookedDate:string,
        Amount:string,
        status:string;
        specialization:string

    }
}) => {
  return (
    <tr>
      <td>
        <h2 className="table-avatar">
          <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
            <img
              className="avatar-img rounded-circle"
              src={`${data.doctorImage}`}
              alt="User Image"
            />
          </a>
          <a className="no-underline" href="doctor-profile.html ">
           {data.doctorName} <span>{data.specialization}</span>
          </a>
        </h2>
      </td>
      <td>
        {data.AppointmentDate} <span className="d-block text-info">10.00 AM</span>
      </td>
      <td>{data.BookedDate}</td>
      <td>{data.Amount}</td>
      <td>Default</td>
      <td>
        <span className={`badge badge-pill ${status[data.status as "Pending" | "Completed" |"Rejected" | "Confirmed"] }`}>{data.status}</span>
      </td>
      {/* <td className="text-right">
        <div className="table-action">
          <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
            <i className="fas fa-print" /> Print
          </a>
          <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
            <i className="far fa-eye" /> View
          </a>
        </div>
      </td> */}
    </tr>
  );
};

export default AppointmentUserTable;
