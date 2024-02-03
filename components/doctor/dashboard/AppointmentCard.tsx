import React from 'react'

const AppointmentCard = ({data}:{
    data:{
        patient:{
            name:string,
            id:string;
            avatar:string;
        },
        apptDate:string,
        type:string,
        purpose:string,
        amount?:string;
        status:string
    }
}) => {
  return (
    <tr>
    <td>
      <h2 className="table-avatar">
        <a
          href="patient-profile.html"
          className="avatar avatar-sm mr-2"
        >
          <img
            className="avatar-img rounded-circle"
            src={data.patient.avatar}
            alt="User Image"
          />
        </a>
        <a href="patient-profile.html">
          {data.patient.name} <span>{data.patient.id}</span>
        </a>
      </h2>
    </td>
    <td>
      {data.apptDate}
      <span className="d-block text-info">
        10.00 AM
      </span>
    </td>
    <td>{data.purpose}</td>
    <td>{data.type}</td>
    <td className="text-center">{data.amount}</td>
    <td className="text-right">
      <div className="table-action flex gap-2">
        <a
          href="javascript:void(0);"
          className="btn btn-sm bg-info-light"
        >
          <i className="far fa-eye" /> View
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-sm bg-success-light"
        >
          <i className="fas fa-check" /> Accept
        </a>
        <a
          href="javascript:void(0);"
          className="btn btn-sm bg-danger-light"
        >
          <i className="fas fa-times" /> Cancel
        </a>
      </div>
    </td>
  </tr>

  )
}

export default AppointmentCard