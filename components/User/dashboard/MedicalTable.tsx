import React from 'react'

const MedicalTable = ({data}:{data:{
    id:string,
    date:string,
    description:string,
    attachment:string,
    created:{
        name:string,
        image:string,
        specialization:string
    }
    
}}) => {
  return (
    <tr>
    <td>
      <a href="">#MR-0010</a>
    </td>
    <td>{data.date}</td>
    <td>{data.description}</td>
    <td>
      <a href="#">dental-test.pdf</a>
    </td>
    <td>
      <h2 className="table-avatar">
        <a
          href="doctor-profile.html"
          className="avatar avatar-sm mr-2"
          >
          <img
            className="avatar-img rounded-circle"
            src={`${data.created.image}`}
            alt="User Image"
            />
        </a>
        <a href="doctor-profile.html">
         {data.created.name} <span>{data.created.specialization}</span>
        </a>
      </h2>
    </td>
    <td className="text-right">
      <div className="table-action">
        <a
          href="javascript:void(0);"
          className="btn btn-sm bg-info-light"
          >
          <i className="far fa-eye" /> View
        </a>
        {/* <a
          href="javascript:void(0);"
          className="btn btn-sm bg-primary-light"
          >
          <i className="fas fa-print" /> Print
        </a> */}
      </div>
    </td>
  </tr>

  )
}

export default MedicalTable