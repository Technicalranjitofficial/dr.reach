"use client"
import { convertDateToFormat } from '@/utils/utils';
import React from 'react'
interface UnverifiedDoctors {
    id: string;
    user: {
      Fname: string;
      Lname: string;
      email: string;
      isActive: boolean;
    };
    createdAt: string;
    status:"ACCEPTED"|"REJECTED"|"PENDING",
  }
  
const DoctorList = ({data}:{
    data:UnverifiedDoctors[]
}) => {
  return (
    <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col-sm-12">
          <h3 className="page-title">List of Doctors</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Dashboard</a>
            </li>
            <li className="breadcrumb-item">
              <a href="javascript:(0);">Users</a>
            </li>
            <li className="breadcrumb-item active">Doctor</li>
          </ul>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="datatable table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>Email</th>
                    <th>Member Since</th>
                    <th>Status</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
         {
            data && data.map((d,i)=>{
                return          <tr>
                <td>
                  <h2 className="table-avatar">
                    <a href="profile.html" className="avatar avatar-sm mr-2">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/img/doctors/doctor-thumb-01.jpg"
                        alt="User Image"
                      />
                    </a>
                    <a href="profile.html">{d.user.Fname} {d.user.Lname}</a>
                  </h2>
                </td>
                <td>{d.user.email}</td>
                <td>
                 {convertDateToFormat(d.createdAt)}
                  {/* <small>02.59 AM</small> */}
                </td>
                <td>
                <button type="button" className={`btn ${d.status==="ACCEPTED"?"btn-success":"btn-danger"} btn-sm`}>{d.status==="ACCEPTED"?"Accepted":"Rejected"}</button>

                </td>
                {/* <td>
                  <div className="status-toggle">
                    <input
                    onChange={(e)=>{
                        console.log(e.target.value)
                    }}
                    defaultChecked={d.user.isActive}
                      type="checkbox"
                      id="status_1"
                      className="check"
                      
                    />
                    <label htmlFor="status_1" className="checktoggle">
                      checkbox
                    </label>
                  </div>
                </td> */}
              </tr>
})
         }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default DoctorList