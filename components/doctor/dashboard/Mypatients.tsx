import React from 'react'

const Mypatients = ({data}:{data:{
    Fname:string,
    Lname:string,
    email:string,
    dob:string,
    contact:string,
    address:{
        address: String;
        city:    String;
        state:   String;
        country: String;
        pincode: String;
    },
    userId:string,
    bloodGroup:string;
    profilePic:string
}}) => {
  return (
 
   
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card widget-profile pat-widget-profile">
          <div className="card-body">
            <div className="pro-widget-content">
              <div className="profile-info-widget">
                <a href="patient-profile.html" className="booking-doc-img">
                  <img src={data.profilePic} alt="User Image" />
                </a>
                <div className="profile-det-info">
                  <h3>
                    <a href="patient-profile.html">{data.Fname} {data.Lname}</a>
                  </h3>
                  <div className="patient-details">
                    <h5>
                      <b>Patient ID :</b> {data.userId}
                    </h5>
                    <h5 className="mb-0">
                      <i className="fas fa-map-marker-alt" /> {data.address.address} {data.address.city}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="patient-info">
              <ul>
                <li>
                  Phone <span>{data.contact??null}</span>
                </li>
                <li>
                  Age <span>38 Years, Male</span>
                </li>
                <li>
                  Blood Group <span>{data.bloodGroup}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    

  
  
  )
}

export default Mypatients