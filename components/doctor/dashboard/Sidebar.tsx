"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
    const session = useSession();
    const router = usePathname()
  return (
    <div className="profile-sidebar">
              <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                  <a href="#" className="booking-doc-img">
                    <img
                      src="/assets/doctors/doctor-thumb-02.jpg"
                      alt="User Image"
                    />
                  </a>
                  <div className="profile-det-info">
                    <h3>{session.data?.data.Fname} {session.data?.data.Lname}</h3>
                    <div className="patient-details">
                      <h5 className="mb-0">
                        {session.data?.data?.doctorProfile?.specializations?.join(",")}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-widget">
                <nav className="dashboard-menu">
                  <ul>
                    <li className={`${router.split("/").length<4 && 'active'}`}>
                      <Link href="/doctor/dashboard">
                        <i className="fas fa-columns" />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    {/* <li>
                      <a href="/doctor/dashboard/appointment">
                        <i className="fas fa-calendar-check" />
                        <span>Appointments</span>
                      </a>
                    </li> */}
                    <li className={`${router.includes("mypatients") && 'active'}`}>
                      <Link href="/doctor/dashboard/mypatients">
                        <i className="fas fa-user-injured" />
                        <span>My Patients</span>
                      </Link>
                    </li>
                    <li  className={`${router.includes("shedule") && 'active'}`}>
                      <Link href="/doctor/dashboard/shedule">
                        <i className="fas fa-hourglass-start" />
                        <span>Schedule Timings</span>
                      </Link>
                    </li>
                    {/* <li>
                      <a href="invoices.html">
                        <i className="fas fa-file-invoice" />
                        <span>Invoices</span>
                      </a>
                    </li> */}
                    <li  className={`${router.includes("review") && 'active'}`}>
                      <Link href="/doctor/dashboard/review">
                        <i className="fas fa-star" />
                        <span>Reviews</span>
                      </Link>
                    </li>
                    {/* <li>
                      <a href="chat-doctor.html">
                        <i className="fas fa-comments" />
                        <span>Message</span>
                        <small className="unread-msg">23</small>
                      </a>
                    </li> */}
                    <li>
                      <a href="doctor-profile-settings.html">
                        <i className="fas fa-user-cog" />
                        <span>Profile Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="social-media.html">
                        <i className="fas fa-share-alt" />
                        <span>Social Media</span>
                      </a>
                    </li>
                    <li>
                      <a href="doctor-change-password.html">
                        <i className="fas fa-lock" />
                        <span>Change Password</span>
                      </a>
                    </li>
                    <li>
                      <Link href="#" onClick={()=>signOut()}>
                        <i className="fas fa-sign-out-alt" />
                        <span>Logout</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
  )
}

export default Sidebar