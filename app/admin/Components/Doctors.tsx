"use client";

import Link from "next/link";

function Doctors() {
  return (
    <>
      {/* Header */}
      <div className="header bg-white">
        {/* Logo */}
        <div className="header-left">
          <Link href="index.html" className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
          <Link href="index.html" className="logo logo-small">
            <img src="/img/logo-small.png" alt="Logo" width={30} height={30} />
          </Link>
        </div>
        {/* /Logo */}
        <Link href="javascript:void(0);" id="toggle_btn">
          <i className="fe fe-text-align-left" />
        </Link>
        <div className="top-nav-search">
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <button className="btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>
        </div>
        {/* Mobile Menu Toggle */}
        <a className="mobile_btn" id="mobile_btn">
          <i className="fa fa-bars" />
        </a>
        {/* /Mobile Menu Toggle */}
        {/* Header Right Menu */}
        <ul className="nav user-menu">
          {/* Notifications */}
          <li className="nav-item dropdown noti-dropdown">
            <Link
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge badge-pill">3</span>
            </Link>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <Link href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </Link>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <Link href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/doctors/doctor-thumb-01.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                            Schedule{" "}
                            <span className="noti-title">her appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              4 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/patients/patient1.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Charlene Reed</span>{" "}
                            has booked her appointment to{" "}
                            <span className="noti-title">Dr. Ruby Perrin</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              6 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/patients/patient2.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Travis Trimble</span>{" "}
                            sent a amount of $210 for his{" "}
                            <span className="noti-title">appointment</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              8 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li className="notification-message">
                    <Link href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/patients/patient3.jpg"
                          />
                        </span>
                        <div className="media-body">
                          <p className="noti-details">
                            <span className="noti-title">Carl Kelly</span> send
                            a message{" "}
                            <span className="noti-title"> to his doctor</span>
                          </p>
                          <p className="noti-time">
                            <span className="notification-time">
                              12 mins ago
                            </span>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <Link href="#">View all Notifications</Link>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow">
            <Link
              href="#"
              className="dropdown-toggle nav-link"
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="/img/profiles/avatar-01.jpg"
                  width={31}
                  alt="Ryan Taylor"
                />
              </span>
            </Link>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="/img/profiles/avatar-01.jpg"
                    alt="User Image"
                    className="avatar-img rounded-circle"
                  />
                </div>
                <div className="user-text">
                  <h6>Ryan Taylor</h6>
                  <p className="text-muted mb-0">Administrator</p>
                </div>
              </div>
              <a className="dropdown-item" href="profile.html">
                My Profile
              </a>
              <a className="dropdown-item" href="settings.html">
                Settings
              </a>
              <a className="dropdown-item" href="login.html">
                Logout
              </a>
            </div>
          </li>
          {/* /User Menu */}
        </ul>
        {/* /Header Right Menu */}
      </div>
      {/* /Header */}
      {/* Sidebar */}
      <div className="sidebar" id="sidebar">
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="menu-title">
                <span>Main</span>
              </li>
              <li>
                <Link href="index.html">
                  <i className="fe fe-home" /> <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link href="appointment-list.html">
                  <i className="fe fe-layout" /> <span>Appointments</span>
                </Link>
              </li>
              <li>
                <Link href="specialities.html">
                  <i className="fe fe-users" /> <span>Specialities</span>
                </Link>
              </li>
              <li className="active">
                <Link href="doctor-list.html">
                  <i className="fe fe-user-plus" /> <span>Doctors</span>
                </Link>
              </li>
              <li>
                <Link href="patient-list.html">
                  <i className="fe fe-user" /> <span>Patients</span>
                </Link>
              </li>
              <li>
                <Link href="reviews.html">
                  <i className="fe fe-star-o" /> <span>Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="transactions-list.html">
                  <i className="fe fe-activity" /> <span>Transactions</span>
                </Link>
              </li>
              <li>
                <Link href="settings.html">
                  <i className="fe fe-vector" /> <span>Settings</span>
                </Link>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fe fe-document" /> <span> Reports</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link href="invoice-report.html">Invoice Reports</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li>
                <Link href="profile.html">
                  <i className="fe fe-user-plus" /> <span>Profile</span>
                </Link>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fe fe-document" /> <span> Authentication </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link href="login.html"> Login </Link>
                  </li>
                  <li>
                    <Link href="register.html"> Register </Link>
                  </li>
                  <li>
                    <Link href="forgot-password.html"> Forgot Password </Link>
                  </li>
                  <li>
                    <Link href="lock-screen.html"> Lock Screen </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fe fe-warning" /> <span> Error Pages </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link href="error-404.html">404 Error </Link>
                  </li>
                  <li>
                    <Link href="error-500.html">500 Error </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="blank-page.html">
                  <i className="fe fe-file" /> <span>Blank Page</span>
                </Link>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
                <Link href="components.html">
                  <i className="fe fe-vector" /> <span>Components</span>
                </Link>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fe fe-layout" /> <span> Forms </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link href="form-basic-inputs.html">Basic Inputs </Link>
                  </li>
                  <li>
                    <Link href="form-input-groups.html">Input Groups </Link>
                  </li>
                  <li>
                    <Link href="form-horizontal.html">Horizontal Form </Link>
                  </li>
                  <li>
                    <Link href="form-vertical.html"> Vertical Form </Link>
                  </li>
                  <li>
                    <Link href="form-mask.html"> Form Mask </Link>
                  </li>
                  <li>
                    <Link href="form-validation.html"> Form Validation </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="#">
                  <i className="fe fe-table" /> <span> Tables </span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }}>
                  <li>
                    <Link href="tables-basic.html">Basic Tables </Link>
                  </li>
                  <li>
                    <Link href="data-tables.html">Data Table </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link href="javascript:void(0);">
                  <i className="fe fe-code" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </Link>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <Link href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow" />
                    </Link>
                    <ul style={{ display: "none" }}>
                      <li>
                        <Link href="javascript:void(0);">
                          <span>Level 2</span>
                        </Link>
                      </li>
                      <li className="submenu">
                        <Link href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </Link>
                        <ul style={{ display: "none" }}>
                          <li>
                            <Link href="javascript:void(0);">Level 3</Link>
                          </li>
                          <li>
                            <Link href="javascript:void(0);">Level 3</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link href="javascript:void(0);">
                          {" "}
                          <span>Level 2</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /Sidebar */}
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">List of Doctors</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="index.html">Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link href="javascript:(0);">Users</Link>
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
                          <th>Speciality</th>
                          <th>Member Since</th>
                          <th>Earned</th>
                          <th>Account Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-01.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Ruby Perrin</Link>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            14 Jan 2019 <br />
                            <small>02.59 AM</small>
                          </td>
                          <td>$3100.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-02.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Darren Elder</Link>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            11 Jun 2019 <br />
                            <small>4.50 AM</small>
                          </td>
                          <td>$5000.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-03.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Deborah Angel</Link>
                            </h2>
                          </td>
                          <td>Cardiology</td>
                          <td>
                            4 Jan 2018 <br />
                            <small>9.40 AM</small>
                          </td>
                          <td>$3300.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-04.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Sofia Brient</Link>
                            </h2>
                          </td>
                          <td>Urology</td>
                          <td>
                            5 Jul 2019 <br />
                            <small>12.59 AM</small>
                          </td>
                          <td>$3500.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-05.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">
                                Dr. Marvin Campbell
                              </Link>
                            </h2>
                          </td>
                          <td>Orthopaedics</td>
                          <td>
                            24 Jan 2019 <br />
                            <small>02.59 AM</small>
                          </td>
                          <td>$3700.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-06.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">
                                Dr. Katharine Berthold
                              </Link>
                            </h2>
                          </td>
                          <td>Orthopaedics</td>
                          <td>
                            23 Mar 2019 <br />
                            <small>02.50 PM</small>
                          </td>
                          <td>$4000.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-07.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Linda Tobin</Link>
                            </h2>
                          </td>
                          <td>Neurology</td>
                          <td>
                            14 Dec 2018 <br />
                            <small>01.59 AM</small>
                          </td>
                          <td>$2000.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-08.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Paul Richard</Link>
                            </h2>
                          </td>
                          <td>Dermatology</td>
                          <td>
                            11 Jan 2019 <br />
                            <small>02.59 AM</small>
                          </td>
                          <td>$3000.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-09.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. John Gibbs</Link>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            21 Apr 2018 <br />
                            <small>02.59 PM</small>
                          </td>
                          <td>$4100.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <Link
                                href="profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-10.jpg"
                                  alt="User Image"
                                />
                              </Link>
                              <Link href="profile.html">Dr. Olga Barlow</Link>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            15 Feb 2018 <br />
                            <small>03.59 AM</small>
                          </td>
                          <td>$3500.00</td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_1"
                                className="check"
                              />
                              <label htmlFor="status_1" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
}

export default Doctors;
