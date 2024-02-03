"use client"
import { useAppDispatch, useAppSelector } from '@/Redux/hooks/hooks'
import { setActiveDotcorTab } from '@/Redux/reducers/UserReducers';
import React from 'react'
import { BsStarFill } from 'react-icons/bs';
import Header from './Header';



type DoctorProfile = {
  id: string;
    username: string;
    Fname: string;
    Lname: string;
    email: string;
    age: number;
    gender:string;
    dob: string;
    
    bloodGroup: string;
    contact: string;
    role: string;
    userId: string;

    address: {
      address: string;
      city: string;
      state: string;
      country: string;
      pincode: string;
    };

  doctorProfile: {
   

    specializations: string[];
    schedules: {
      day: string;
      startTime: string;
      endTime: string;
    }[];
  
    educations: {
      university: string;
      degree: string;
      duration: string;
    }[];
    workExperiences: {
      clinic: string;
      duration: string;
    }[];
    awards: {
      date: string;
      title: string;
      description: string;
    }[];
    id: string;
    userId: string;
    fee: number;
    experience: number;
    description: string;
    profilePic: string;
    status: string;
  };
};

const DoctorProfile = ({data}:{data:DoctorProfile}) => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.userReducer.activeDoctorTab);

  const handleOnClickTab=(index:number)=>{
    dispatch(setActiveDotcorTab(index))
  }
  return (
  
    <div className="main-wrapper pt-28  w-full md:px-10 mx-auto overflow-x-hidden">
    
    {/* Breadcrumb */}
    <div className="breadcrumb-bar">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-12 col-12">
            <nav aria-label="breadcrumb" className="page-breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index-2.html">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Doctor Profile
                </li>
              </ol>
            </nav>
            <h2 className="breadcrumb-title">Doctor Profile</h2>
          </div>
        </div>
      </div>
    </div>
    {/* /Breadcrumb */}
    {/* Page Content */}
    <div className="content">
      <div className="container">
        {/* Doctor Widget */}
        <div className="card">
          <div className="card-body">
            <div className="doctor-widget">
              <div className="doc-info-left">
                <div className="doctor-img">
                  <img
                    src="/assets/doctors/doctor-thumb-02.jpg"
                    className="img-fluid"
                    alt="User Image"
                  />
                </div>
                <div className="doc-info-cont">
                  <h4 className="doc-name">{data?.Fname} {data?.Lname}</h4>
                  <p className="doc-speciality">
                  {data?.doctorProfile?.specializations?.join(",")}
                  </p>
                  <p className="doc-department">
                    <img
                      src="/assets/specialities/specialities-05.png"
                      className="img-fluid"
                      alt="Speciality"
                    />
                    Dentist
                  </p>
                  <div className="rating">
                    {/* <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" /> */}
                    <BsStarFill size={20} className='text-yellow-500'/>
                    <BsStarFill size={20} className='text-yellow-500'/>
                    <BsStarFill size={20} className='text-yellow-500'/>
                    <BsStarFill size={20} className='text-yellow-500'/>
                    <BsStarFill size={20} className='text-yellow-500'/>
                    <i className="fas fa-star" />
                    <span className="d-inline-block average-rating">(35)</span>
                  </div>
                  <div className="clinic-details">
                    <p className="doc-location">
                      <i className="fas fa-map-marker-alt" /> {data?.address?.address}, {data?.address?.city}, {data?.address?.state}, {data?.address?.country}, {data?.address?.pincode}
                      {/* <a href="javascript:void(0);">Get Directions</a> */}
                    </p>
                    {/* <ul className="clinic-gallery">
                      <li>
                        <a
                          href="assets/img/features/feature-01.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-01.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/features/feature-02.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-02.jpg"
                            alt="Feature Image"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/features/feature-03.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-03.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                      <li>
                        <a
                          href="assets/img/features/feature-04.jpg"
                          data-fancybox="gallery"
                        >
                          <img
                            src="assets/img/features/feature-04.jpg"
                            alt="Feature"
                          />
                        </a>
                      </li>
                    </ul> */}
                  </div>
                  {/* <div className="clinic-services">
                    <span>Dental Fillings</span>
                    <span>Teeth Whitneing</span>
                  </div> */}
                </div>
              </div>
              <div className="doc-info-right">
                <div className="clini-infos">
                  <ul>
                    {/* <li>
                      <i className="far fa-thumbs-up" /> 99%
                    </li> */}
                    <li>
                      <i className="far fa-comment" /> 35 Feedback
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" /> {data?.contact}
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt" /> {data?.email}
                    </li>
                    <li>
                      <i className="far fa-money-bill-alt" /> {data?.doctorProfile.fee}
                    </li>
                  </ul>
                </div>
                <div className="doctor-action">
                  <a href="javascript:void(0)" className="btn btn-white fav-btn">
                    <i className="far fa-bookmark" />
                  </a>
                  <a href="chat.html" className="btn btn-white msg-btn">
                    <i className="far fa-comment-alt" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-white call-btn"
                    data-toggle="modal"
                    data-target="#voice_call"
                  >
                    <i className="fas fa-phone" />
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="btn btn-white call-btn"
                    data-toggle="modal"
                    data-target="#video_call"
                  >
                    <i className="fas fa-video" />
                  </a>
                </div>
                <div className="clinic-booking">
                  <a className="apt-btn" href="booking.html">
                    Book Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Doctor Widget */}
        {/* Doctor Details Tab */}
        <div className="card">
          <div className="card-body pt-0">
            {/* Tab Menu */}
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                <li onClick={()=>handleOnClickTab(0)} className="nav-item">
                  <a
                    className={`nav-link ${activeTab===0 && "active"}`}
                    href="#doc_overview"
                    data-toggle="tab"
                  >
                    Overview
                  </a>
                </li>
                <li onClick={()=>handleOnClickTab(1)} className="nav-item ">
                  <a className={`nav-link ${activeTab===1 && "active"}`} href="#doc_locations" data-toggle="tab">
                    Locations
                  </a>
                </li>
                <li onClick={()=>handleOnClickTab(2)} className="nav-item">
                  <a className={`nav-link ${activeTab===2 && "active"}`} href="#doc_reviews" data-toggle="tab">
                    Reviews
                  </a>
                </li>
                <li onClick={()=>handleOnClickTab(3)} className="nav-item">
                  <a
                    className={`nav-link  ${activeTab===3 && "active"} `}
                    href="#doc_business_hours"
                    data-toggle="tab"
                  >
                    Business Hours
                  </a>
                </li>
              </ul>
            </nav>
            {/* /Tab Menu */}
            {/* Tab Content */}
            <div className="tab-content pt-0">
              {/* Overview Content */}
              <div
                role="tabpanel"
                id="doc_overview"
                className={`tab-pane fade  ${activeTab===0 && "show active"}`}
              >
                <div className="row">
                  <div className="col-md-12 col-lg-9">
                    {/* About Details */}
                    <div className="widget about-widget">
                      <h4 className="widget-title">About Me</h4>
                      <p>
                       {data?.doctorProfile.description}
                      </p>
                    </div>
                    {/* /About Details */}
                    {/* Education Details */}
                    <div className="widget education-widget">
                      <h4 className="widget-title">Education</h4>
                      <div className="experience-box">
                        <ul className="experience-list">


                        {data?.doctorProfile?.educations.map((edu,index)=>{
                          return <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                American Dental Medical University
                              </a>
                              <div>BDS</div>
                              <span className="time">1998 - 2003</span>
                            </div>
                          </div>
                        </li>
                        }
                          
                        )}


                        </ul>
                      </div>
                    </div>
                    {/* /Education Details */}
                    {/* Experience Details */}
                    <div className="widget experience-widget">
                      <h4 className="widget-title">Work &amp; Experience</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                         {data?.doctorProfile?.workExperiences.map((work,index)=>{

                          return  <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <a href="#/" className="name">
                                Glowing Smiles Family Dental Clinic
                              </a>
                              <span className="time">
                                2010 - Present (5 years)
                              </span>
                            </div>
                          </div>
                        </li>


                         }
                         )}

                        
                        </ul>
                      </div>
                    </div>
                    {/* /Experience Details */}
                    {/* Awards Details */}
                    <div className="widget awards-widget">
                      <h4 className="widget-title">Awards</h4>
                      <div className="experience-box">
                        <ul className="experience-list">
                         {data?.doctorProfile?.awards.map((award,index)=>{
                          return  <li>
                          <div className="experience-user">
                            <div className="before-circle" />
                          </div>
                          <div className="experience-content">
                            <div className="timeline-content">
                              <p className="exp-year">July 2019</p>
                              <h4 className="exp-title">Humanitarian Award</h4>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Proin a ipsum tellus. Interdum
                                et malesuada fames ac ante ipsum primis in
                                faucibus.
                              </p>
                            </div>
                          </div>
                        </li>

                         }
                        )}
                         
                        </ul>
                      </div>
                    </div>
                    {/* /Awards Details */}
                    {/* Services List */}
                   
                    {/* /Services List */}
                    {/* Specializations List */}
                    <div className="service-list">
                      <h4>Specializations</h4>
                      <ul className="clearfix">
                       {data?.doctorProfile?.specializations.map((spec,index)=>{
                        return <li>{spec}</li>
                       }
                       )}
                      </ul>
                    </div>
                    {/* /Specializations List */}
                  </div>
                </div>
              </div>
              {/* /Overview Content */}
              {/* Locations Content */}
              <div role="" id="doc_locations"className={`tab-pane fade  ${activeTab===1 && "show active"}`}>
                {/* Location List */}
                <div className="location-list active">
                  <div className="row">
                    {/* Clinic Content */}
                    <div className="col-md-6">
                      <div className="clinic-content">
                        <h4 className="clinic-name">
                          <a href="#">Smile Cute Dental Care Center</a>
                        </h4>
                        <p className="doc-speciality">
                          MDS - Periodontology and Oral Implantology, BDS
                        </p>
                        <div className="rating">
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star filled" />
                          <i className="fas fa-star" />
                          <span className="d-inline-block average-rating">
                            (4)
                          </span>
                        </div>
                        <div className="clinic-details mb-0">
                          <h5 className="clinic-direction">
                            {" "}
                            <i className="fas fa-map-marker-alt" /> 2286 Sundown
                            Lane, Austin, Texas 78749, USA <br />
                            <a href="javascript:void(0);">Get Directions</a>
                          </h5>
                          
                        </div>
                      </div>
                    </div>
                    {/* /Clinic Content */}
                   
                  </div>
                </div>
                {/* /Location List */}
            
              </div>
              {/* /Locations Content */}
              {/* Reviews Content */}
              <div role="tabpanel" id="doc_reviews" className={`tab-pane fade  ${activeTab===2 && "show active"}`}>
                {/* Review Listing */}
                <div className="widget review-listing">
                  <ul className="comments-list">
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar avatar-sm rounded-circle"
                          alt="User Image"
                          src="/assets/patients/patient.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Richard Wilson</span>
                            <span className="comment-date">
                              Reviewed 2 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="recommended">
                            <i className="far fa-thumbs-up" /> I recommend the
                            doctor
                          </p>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    
                    </li>
                    {/* /Comment List */}
                    
                  </ul>
                  {/* Show All */}
                  <div className="all-feedback text-center">
                    <a href="#" className="btn btn-primary btn-sm">
                      Show all feedback <strong>(167)</strong>
                    </a>
                  </div>
                  {/* /Show All */}
                </div>
                {/* /Review Listing */}
                {/* Write Review */}
                <div className="write-review">
                  <h4>
                    Write a review for <strong>Dr. Darren Elder</strong>
                  </h4>
                  {/* Write Review Form */}
                  <form>
                    <div className="form-group">
                      <label>Review</label>
                      <div className="star-rating">
                        <input
                          id="star-5"
                          type="radio"
                          name="rating"
                          defaultValue="star-5"
                        />
                        <label htmlFor="star-5" title="5 stars">
                          <i className="active fa fa-star" />
                        </label>
                        <input
                          id="star-4"
                          type="radio"
                          name="rating"
                          defaultValue="star-4"
                        />
                        <label htmlFor="star-4" title="4 stars">
                          <i className="active fa fa-star" />
                        </label>
                        <input
                          id="star-3"
                          type="radio"
                          name="rating"
                          defaultValue="star-3"
                        />
                        <label htmlFor="star-3" title="3 stars">
                          <i className="active fa fa-star" />
                        </label>
                        <input
                          id="star-2"
                          type="radio"
                          name="rating"
                          defaultValue="star-2"
                        />
                        <label htmlFor="star-2" title="2 stars">
                          <i className="active fa fa-star" />
                        </label>
                        <input
                          id="star-1"
                          type="radio"
                          name="rating"
                          defaultValue="star-1"
                        />
                        <label htmlFor="star-1" title="1 star">
                          <i className="active fa fa-star" />
                        </label>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Title of your review</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="If you could say it in one sentence, what would you say?"
                      />
                    </div>
                    <div className="form-group">
                      <label>Your review</label>
                      <textarea
                        id="review_desc"
                        maxLength={100}
                        className="form-control"
                        defaultValue={""}
                      />
                      <div className="d-flex justify-content-between mt-3">
                        <small className="text-muted">
                          <span id="chars">100</span> characters remaining
                        </small>
                      </div>
                    </div>
                    <hr />
                    <div className="form-group">
                      <div className="terms-accept">
                        <div className="custom-checkbox">
                          <input type="checkbox" id="terms_accept" />
                          <label htmlFor="terms_accept">
                            I have read and accept{" "}
                            <a href="#">Terms &amp; Conditions</a>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="submit-section">
                      <button
                        type="submit"
                        className="btn btn-primary submit-btn"
                      >
                        Add Review
                      </button>
                    </div>
                  </form>
                  {/* /Write Review Form */}
                </div>
                {/* /Write Review */}
              </div>
              {/* /Reviews Content */}
              {/* Business Hours Content */}
              <div
                role="tabpanel"
                id="doc_business_hours"
                className={`tab-pane fade  ${activeTab===3 && "show active"}`}
              >
                <div className="row">
                  <div className="col-md-6 offset-md-3">
                    {/* Business Hours Widget */}
                    <div className="widget business-widget">
                      <div className="widget-content">
                        <div className="listing-hours">
                          <div className="listing-day current">
                            <div className="day">
                              Today <span>5 Nov 2019</span>
                            </div>
                            <div className="time-items">
                              <span className="open-status">
                                <span className="badge bg-success-light">
                                  Open Now
                                </span>
                              </span>
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day">
                            <div className="day">Monday</div>
                            <div className="time-items">
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day">
                            <div className="day">Tuesday</div>
                            <div className="time-items">
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day">
                            <div className="day">Wednesday</div>
                            <div className="time-items">
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day">
                            <div className="day">Thursday</div>
                            <div className="time-items">
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day">
                            <div className="day">Friday</div>
                            <div className="time-items">
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day">
                            <div className="day">Saturday</div>
                            <div className="time-items">
                              <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                          </div>
                          <div className="listing-day closed">
                            <div className="day">Sunday</div>
                            <div className="time-items">
                              <span className="time">
                                <span className="badge bg-danger-light">
                                  Closed
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Business Hours Widget */}
                  </div>
                </div>
              </div>
              {/* /Business Hours Content */}
            </div>
          </div>
        </div>
        {/* /Doctor Details Tab */}
      </div>
    </div>
    {/* /Page Content */}
  </div>
  
  )
}

export default DoctorProfile