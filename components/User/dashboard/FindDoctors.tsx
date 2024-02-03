import Link from 'next/link';
import React from 'react'
import { BsStarFill } from 'react-icons/bs';


interface FindDoctorList{
    specializations: string[];
  
    id: string;
    fee: number;
    profilePic: string; 
    user: {
      id: string;
     
      Fname: string;
      Lname: string;
      email: string;
      contact: string;
      username:string;
      address: {
        address: string;
        city: string;
        state: string;
        country: string;
        pincode: string;
      };
    };
    
}

const FindDoctors = ({data}:{data:FindDoctorList[]}) => {
  return (
    <div className="row row-grid">
 {
data && data.map((d,v)=>{
    return <div className="col-md-6 col-lg-4 col-xl-3">
    <div className="profile-widget">
      <div className="doc-img">
        <a href="doctor-profile.html">
          <img
            className="img-fluid"
            alt="User Image"
            src="/assets/doctors/doctor-01.jpg"
          />
        </a>
        {/* <a href="javascript:void(0)" className="fav-btn">
          <i className="far fa-bookmark" />
        </a> */}
      </div>
      <div className="pro-content">
        <h3 className="title">
          <a href="doctor-profile.html">{d?.user?.Fname} {d?.user?.Lname}</a>
          <i className="fas fa-check-circle verified" />
        </h3>
        
        <p className=" text-[12px]">
         {d.specializations.join(",")}
        </p>
        <div className="rating">
            <BsStarFill className='text-yellow-500' size={20} />
            <BsStarFill className='text-yellow-500' size={20} />
            <BsStarFill className='text-yellow-500' size={20} />
            <BsStarFill className='text-yellow-500' size={20} />
            <BsStarFill className='text-yellow-500' size={20} />
       
          <span className="d-inline-block average-rating">(17)</span>
        </div>
        <ul className="available-info mt-0">
          <li>
            <i className="fas fa-map-marker-alt" />{d.user?.address?.city} {d?.user?.address?.state}
          </li>
          {/* <li>
            <i className="far fa-clock" /> Available on Fri, 22 Mar
          </li> */}
          <li>
            <i className="far fa-money-bill-alt" /> $300 - $1000{" "}
            <i
              className="fas fa-info-circle"
              data-toggle="tooltip"
              title="Lorem Ipsum"
            />
          </li>
        </ul>
        <div className="row row-sm">
          <div className="col-6">
          <Link href={`/doctorprofile/${d.user.username}`} className="btn btn-primary btn-sm">View Profile</Link>
          </div>
          <div className="col-6">
          <Link href="" type="button" className="btn btn-success btn-sm">Book Now</Link>

          </div>
        </div>
      </div>
    </div>
  </div>
})
 }
 
</div>

  )
}

export default FindDoctors