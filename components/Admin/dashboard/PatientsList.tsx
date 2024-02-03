import React from 'react'


interface PatientsList {
  
    id: string;
    Fname: string;
    Lname: string;
    dob: string;
    contact: string;
    email:string
    userId: string;
    address: {
      address: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };
  };


const PatientsList = ({data}:{
    data:PatientsList[]
}) => {
  return (
    <div className="content container-fluid">
  {/* Page Header */}
  <div className="page-header">
    <div className="row">
      <div className="col-sm-12">
        <h3 className="page-title">List of Patient</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:(0);">Users</a>
          </li>
          <li className="breadcrumb-item active">Patient</li>
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
            <div className="table-responsive">
              <table className="datatable table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Patient ID</th>
                    <th>Patient Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
       {
        data && data.map((d,i)=>{
            return            <tr>
            <td>{d.userId}</td>
            <td>
              <h2 className="table-avatar">
                <a
                  href="profile.html"
                  className="avatar avatar-sm mr-2"
                >
                  <img
                    className="avatar-img rounded-circle"
                    src="/assets/patients/patient1.jpg"
                    alt="User Image"
                  />
                </a>
                <a href="profile.html" className='no-underline'>{d.Fname??"NOT"}{d.Lname} </a>
              </h2>
            </td>
            <td>{d.email}</td>
            <td>
              {Object.values(d.address).join(" ")}
            </td>
            <td>{d.contact?? "NOT"}</td>
            
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
</div>

  )
}

export default PatientsList