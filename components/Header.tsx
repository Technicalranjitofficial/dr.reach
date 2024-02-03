import React from 'react'

const Header = () => {
  return (
    <header className="header">
    <nav className="navbar navbar-expand-lg header-nav">
      <div className="navbar-header">
        <a id="mobile_btn" href="javascript:void(0);">
          <span className="bar-icon">
            <span />
            <span />
            <span />
          </span>
        </a>
        <a href="index-2.html" className="navbar-brand logo">
          <img
            src="/assets/logo.png"
            className="img-fluid w-[50px] h-[50px]"
            alt="Logo"
          />
        </a>
      </div>
      <div className="main-menu-wrapper">
        <div className="menu-header">
          <a href="index-2.html" className="menu-logo">
            <img
              src="/assets/logo.png"
              className="img-fluid"
              alt="Logo"
            />
          </a>
          <a
            id="menu_close"
            className="menu-close"
            href="javascript:void(0);"
          >
            <i className="fas fa-times" />
          </a>
        </div>
        <ul className="main-nav">
          <li>
            <a href="index-2.html">Home</a>
          </li>
          <li className="has-submenu">
            <a href="#">
              Doctors <i className="fas fa-chevron-down" />
            </a>
            <ul className="submenu">
              <li>
                <a href="doctor-dashboard.html">Doctor Dashboard</a>
              </li>
              <li>
                <a href="appointments.html">Appointments</a>
              </li>
              <li>
                <a href="schedule-timings.html">Schedule Timing</a>
              </li>
              <li>
                <a href="my-patients.html">Patients List</a>
              </li>
              <li>
                <a href="patient-profile.html">Patients Profile</a>
              </li>
              <li>
                <a href="chat-doctor.html">Chat</a>
              </li>
              <li>
                <a href="invoices.html">Invoices</a>
              </li>
              <li>
                <a href="doctor-profile-settings.html">
                  Profile Settings
                </a>
              </li>
              <li>
                <a href="reviews.html">Reviews</a>
              </li>
              <li>
                <a href="doctor-register.html">Doctor Register</a>
              </li>
            </ul>
          </li>
          <li className="has-submenu active">
            <a href="#">
              Patients <i className="fas fa-chevron-down" />
            </a>
            <ul className="submenu">
              <li>
                <a href="search.html">Search Doctor</a>
              </li>
              <li>
                <a href="doctor-profile.html">Doctor Profile</a>
              </li>
              <li>
                <a href="booking.html">Booking</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
              <li>
                <a href="booking-success.html">Booking Success</a>
              </li>
              <li className="active">
                <a href="patient-dashboard.html">Patient Dashboard</a>
              </li>
              <li>
                <a href="favourites.html">Favourites</a>
              </li>
              <li>
                <a href="chat.html">Chat</a>
              </li>
              <li>
                <a href="profile-settings.html">Profile Settings</a>
              </li>
              <li>
                <a href="change-password.html">Change Password</a>
              </li>
            </ul>
          </li>
          <li className="has-submenu">
            <a href="#">
              Pages <i className="fas fa-chevron-down" />
            </a>
            <ul className="submenu">
              <li>
                <a href="voice-call.html">Voice Call</a>
              </li>
              <li>
                <a href="video-call.html">Video Call</a>
              </li>
              <li>
                <a href="search.html">Search Doctors</a>
              </li>
              <li>
                <a href="calendar.html">Calendar</a>
              </li>
              <li>
                <a href="components.html">Components</a>
              </li>
              <li className="has-submenu">
                <a href="invoices.html">Invoices</a>
                <ul className="submenu">
                  <li>
                    <a href="invoices.html">Invoices</a>
                  </li>
                  <li>
                    <a href="invoice-view.html">Invoice View</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blank-page.html">Starter Page</a>
              </li>
              <li>
                <a href="login.html">Login</a>
              </li>
              <li>
                <a href="register.html">Register</a>
              </li>
              <li>
                <a href="forgot-password.html">Forgot Password</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="admin/index.html" target="_blank">
              Admin
            </a>
          </li>
          <li className="login-link">
            <a href="login.html">Login / Signup</a>
          </li>
        </ul>
      </div>
      <ul className="nav header-navbar-rht">
        <li className="nav-item contact-item">
          <div className="header-contact-img">
            <i className="far fa-hospital" />
          </div>
          {/* <div className="header-contact-detail">
            <p className="contact-header">Contact</p>
            <p className="contact-info-header"> +1 315 369 5943</p>
          </div> */}
        </li>
        {/* User Menu */}
        <li className="nav-item dropdown has-arrow logged-item">
          <a
            href="#"
            className="dropdown-toggle nav-link"
            data-toggle="dropdown"
          >
            <span className="user-img">
              <img
                className="rounded-circle"
                src="/assets/patients/patient.jpg"
                width={31}
                alt="Ryan Taylor"
              />
            </span>
          </a>
          <div className="dropdown-menu dropdown-menu-right active">
            <div className="user-header">
              <div className="avatar avatar-sm">
                <img
                  src="assets/img/patients/patient.jpg"
                  alt="User Image"
                  className="avatar-img rounded-circle"
                />
              </div>
              <div className="user-text">
                <h6>Richard Wilson</h6>
                <p className="text-muted mb-0">Patient</p>
              </div>
            </div>
            <a className="dropdown-item" href="patient-dashboard.html">
              Dashboard
            </a>
            <a className="dropdown-item" href="profile-settings.html">
              Profile Settings
            </a>
            <a className="dropdown-item" href="login.html">
              Logout
            </a>
          </div>
        </li>
        {/* /User Menu */}
      </ul>
    </nav>
  </header>
  )
}

export default Header