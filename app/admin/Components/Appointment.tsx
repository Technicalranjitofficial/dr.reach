"use client";

function Appointment() {
  return (
    <>
      {/* Header */}
      <div className="header bg-white">
        {/* Logo */}
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="/img/logo.png" alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img src="/img/logo-small.png" alt="Logo" width={30} height={30} />
          </a>
        </div>
        {/* /Logo */}
        <a href="javascript:void(0);" id="toggle_btn">
          <i className="fe fe-text-align-left" />
        </a>
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
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge rounded-pill">3</span>
            </a>
            <div className="dropdown-menu notifications">
              <div className="topnav-dropdown-header">
                <span className="notification-title">Notifications</span>
                <a href="javascript:void(0)" className="clear-noti">
                  {" "}
                  Clear All{" "}
                </a>
              </div>
              <div className="noti-content">
                <ul className="notification-list">
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/doctors/doctor-thumb-01.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
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
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/patients/patient1.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
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
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/patients/patient2.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
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
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="notify-block d-flex">
                        <span className="avatar avatar-sm flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="/img/patients/patient3.jpg"
                          />
                        </span>
                        <div className="media-body flex-grow-1">
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
                    </a>
                  </li>
                </ul>
              </div>
              <div className="topnav-dropdown-footer">
                <a href="#">View all Notifications</a>
              </div>
            </div>
          </li>
          {/* /Notifications */}
          {/* User Menu */}
          <li className="nav-item dropdown has-arrow">
            <a
              href="#"
              className="dropdown-toggle nav-link"
              data-bs-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="/img/profiles/avatar-01.jpg"
                  width={31}
                  alt="Ryan Taylor"
                />
              </span>
            </a>
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
                <a href="index.html">
                  <i className="fe fe-home" /> <span>Dashboard</span>
                </a>
              </li>
              <li className="active">
                <a href="appointment-list.html">
                  <i className="fe fe-layout" /> <span>Appointments</span>
                </a>
              </li>
              <li>
                <a href="specialities.html">
                  <i className="fe fe-users" /> <span>Specialities</span>
                </a>
              </li>
              <li>
                <a href="doctor-list.html">
                  <i className="fe fe-user-plus" /> <span>Doctors</span>
                </a>
              </li>
              <li>
                <a href="patient-list.html">
                  <i className="fe fe-user" /> <span>Patients</span>
                </a>
              </li>
              <li>
                <a href="reviews.html">
                  <i className="fe fe-star-o" /> <span>Reviews</span>
                </a>
              </li>
              <li>
                <a href="transactions-list.html">
                  <i className="fe fe-activity" /> <span>Transactions</span>
                </a>
              </li>
              <li>
                <a href="settings.html">
                  <i className="fe fe-vector" /> <span>Settings</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-document" /> <span> Reports</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="invoice-report.html">Invoice Reports</a>
                  </li>
                </ul>
              </li>
              <li className="menu-title">
                <span>Pages</span>
              </li>
              <li>
                <a href="profile.html">
                  <i className="fe fe-user-plus" /> <span>Profile</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-document" /> <span> Authentication </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="login.html"> Login </a>
                  </li>
                  <li>
                    <a href="register.html"> Register </a>
                  </li>
                  <li>
                    <a href="forgot-password.html"> Forgot Password </a>
                  </li>
                  <li>
                    <a href="lock-screen.html"> Lock Screen </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-warning" /> <span> Error Pages </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="error-404.html">404 Error </a>
                  </li>
                  <li>
                    <a href="error-500.html">500 Error </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blank-page.html">
                  <i className="fe fe-file" /> <span>Blank Page</span>
                </a>
              </li>
              <li className="menu-title">
                <span>UI Interface</span>
              </li>
              <li>
                <a href="components.html">
                  <i className="fe fe-vector" /> <span>Components</span>
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-layout" /> <span> Forms </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="form-basic-inputs.html">Basic Inputs </a>
                  </li>
                  <li>
                    <a href="form-input-groups.html">Input Groups </a>
                  </li>
                  <li>
                    <a href="form-horizontal.html">Horizontal Form </a>
                  </li>
                  <li>
                    <a href="form-vertical.html"> Vertical Form </a>
                  </li>
                  <li>
                    <a href="form-mask.html"> Form Mask </a>
                  </li>
                  <li>
                    <a href="form-validation.html"> Form Validation </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="#">
                  <i className="fe fe-table" /> <span> Tables </span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="tables-basic.html">Basic Tables </a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Table </a>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <a href="javascript:void(0);">
                  <i className="fe fe-code" /> <span>Multi Level</span>{" "}
                  <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">
                          <span>Level 2</span>
                        </a>
                      </li>
                      <li className="submenu">
                        <a href="javascript:void(0);">
                          {" "}
                          <span> Level 2</span> <span className="menu-arrow" />
                        </a>
                        <ul style={{ display: "none" }}>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                          <li>
                            <a href="javascript:void(0);">Level 3</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0);">
                          {" "}
                          <span>Level 2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 1</span>
                    </a>
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
                <h3 className="page-title">Appointments</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Appointments</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-12">
              {/* Recent Orders */}
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="datatable table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Doctor Name</th>
                          <th>Speciality</th>
                          <th>Patient Name</th>
                          <th>Appointment Time</th>
                          <th>Status</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-01.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Ruby Perrin</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient1.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Charlene Reed </a>
                            </h2>
                          </td>
                          <td>
                            9 Nov 2023{" "}
                            <span className="text-primary d-block">
                              11.00 AM - 11.15 AM
                            </span>
                          </td>
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
                          <td>$200.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-02.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Darren Elder</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient2.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Travis Trimble </a>
                            </h2>
                          </td>
                          <td>
                            5 Nov 2023{" "}
                            <span className="text-primary d-block">
                              11.00 AM - 11.35 AM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_2"
                                className="check"
                              />
                              <label htmlFor="status_2" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$300.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-03.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Deborah Angel</a>
                            </h2>
                          </td>
                          <td>Cardiology</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient3.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Carl Kelly</a>
                            </h2>
                          </td>
                          <td>
                            11 Nov 2023{" "}
                            <span className="text-primary d-block">
                              12.00 PM - 12.15 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_3"
                                className="check"
                              />
                              <label htmlFor="status_3" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$150.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-04.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Sofia Brient</a>
                            </h2>
                          </td>
                          <td>Urology</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient4.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html"> Michelle Fairfax</a>
                            </h2>
                          </td>
                          <td>
                            7 Nov 2023{" "}
                            <span className="text-primary d-block">
                              1.00 PM - 1.20 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_4"
                                className="check"
                              />
                              <label htmlFor="status_4" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$150.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-05.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Marvin Campbell</a>
                            </h2>
                          </td>
                          <td>Orthopaedics</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient5.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Gina Moore</a>
                            </h2>
                          </td>
                          <td>
                            15 Nov 2023{" "}
                            <span className="text-primary d-block">
                              1.00 PM - 1.15 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_5"
                                className="check"
                              />
                              <label htmlFor="status_5" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$200.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-06.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Katharine Berthold</a>
                            </h2>
                          </td>
                          <td>Orthopaedics</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient6.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Elsie Gilley</a>
                            </h2>
                          </td>
                          <td>
                            16 Nov 2023{" "}
                            <span className="text-primary d-block">
                              1.00 PM - 1.15 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_6"
                                className="check"
                              />
                              <label htmlFor="status_6" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$250.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-07.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Linda Tobin</a>
                            </h2>
                          </td>
                          <td>Neurology</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient7.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Joan Gardner</a>
                            </h2>
                          </td>
                          <td>
                            18 Nov 2023{" "}
                            <span className="text-primary d-block">
                              1.10 PM - 1.25 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_7"
                                className="check"
                              />
                              <label htmlFor="status_7" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$260.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-08.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Paul Richard</a>
                            </h2>
                          </td>
                          <td>Dermatology</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient8.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html"> Daniel Griffing</a>
                            </h2>
                          </td>
                          <td>
                            18 Nov 2023{" "}
                            <span className="text-primary d-block">
                              11.10 AM - 11.25 AM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_8"
                                className="check"
                              />
                              <label htmlFor="status_8" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$260.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-09.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. John Gibbs</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient9.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Walter Roberson</a>
                            </h2>
                          </td>
                          <td>
                            21 Nov 2023{" "}
                            <span className="text-primary d-block">
                              12.10 PM - 12.25 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_9"
                                className="check"
                              />
                              <label htmlFor="status_9" className="checktoggle">
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$300.00</td>
                        </tr>
                        <tr>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/doctors/doctor-thumb-10.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Dr. Olga Barlow</a>
                            </h2>
                          </td>
                          <td>Dental</td>
                          <td>
                            <h2 className="table-avatar">
                              <a
                                href="profile.html"
                                className="avatar avatar-sm me-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="/img/patients/patient10.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="profile.html">Robert Rhodes</a>
                            </h2>
                          </td>
                          <td>
                            23 Nov 2023{" "}
                            <span className="text-primary d-block">
                              12.10 PM - 12.25 PM
                            </span>
                          </td>
                          <td>
                            <div className="status-toggle">
                              <input
                                type="checkbox"
                                id="status_11"
                                className="check"
                              />
                              <label
                                htmlFor="status_11"
                                className="checktoggle"
                              >
                                checkbox
                              </label>
                            </div>
                          </td>
                          <td>$300.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* /Recent Orders */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
}

export default Appointment;
