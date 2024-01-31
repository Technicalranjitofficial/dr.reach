"use client";

function Patient() {
  return (
    <>
      {/* Header */}
      <div className="header bg-white">
        {/* Logo */}
        <div className="header-left">
          <a href="index.html" className="logo">
            <img src="assets/img/logo.png" alt="Logo" />
          </a>
          <a href="index.html" className="logo logo-small">
            <img
              src="assets/img/logo-small.png"
              alt="Logo"
              width={30}
              height={30}
            />
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
              data-toggle="dropdown"
            >
              <i className="fe fe-bell" />{" "}
              <span className="badge badge-pill">3</span>
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
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-01.jpg"
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
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient1.jpg"
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
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient2.jpg"
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
                    </a>
                  </li>
                  <li className="notification-message">
                    <a href="#">
                      <div className="media">
                        <span className="avatar avatar-sm">
                          <img
                            className="avatar-img rounded-circle"
                            alt="User Image"
                            src="assets/img/patients/patient3.jpg"
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
              data-toggle="dropdown"
            >
              <span className="user-img">
                <img
                  className="rounded-circle"
                  src="assets/img/profiles/avatar-01.jpg"
                  width={31}
                  alt="Ryan Taylor"
                />
              </span>
            </a>
            <div className="dropdown-menu">
              <div className="user-header">
                <div className="avatar avatar-sm">
                  <img
                    src="assets/img/profiles/avatar-01.jpg"
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
              <li>
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
              <li className="active">
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
                            <th>Age</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Last Visit</th>
                            <th className="text-right">Paid</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>#PT001</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient1.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Charlene Reed </a>
                              </h2>
                            </td>
                            <td>29</td>
                            <td>
                              4417 Goosetown Drive, Taylorsville, North
                              Carolina, 28681
                            </td>
                            <td>8286329170</td>
                            <td>20 Oct 2019</td>
                            <td className="text-right">$100.00</td>
                          </tr>
                          <tr>
                            <td>#PT002</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient2.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Travis Trimble </a>
                              </h2>
                            </td>
                            <td>23</td>
                            <td>4026 Fantages Way, Brunswick, Maine, 04011</td>
                            <td>2077299974</td>
                            <td>22 Oct 2019</td>
                            <td className="text-right">$200.00</td>
                          </tr>
                          <tr>
                            <td>#PT003</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient3.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Carl Kelly</a>
                              </h2>
                            </td>
                            <td>29</td>
                            <td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
                            <td>2607247769</td>
                            <td>21 Oct 2019</td>
                            <td className="text-right">$250.00</td>
                          </tr>
                          <tr>
                            <td>#PT004</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient4.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html"> Michelle Fairfax</a>
                              </h2>
                            </td>
                            <td>25</td>
                            <td>2037 Pearcy Avenue, Decatur, Indiana, 46733</td>
                            <td>5043686874</td>
                            <td>21 Sep 2019</td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>#PT005</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient5.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Gina Moore</a>
                              </h2>
                            </td>
                            <td>23</td>
                            <td>888 Everette Alley, Hialeah, Florida, 33012</td>
                            <td>9548207887</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$350.00</td>
                          </tr>
                          <tr>
                            <td>#PT006</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient6.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Elsie Gilley</a>
                              </h2>
                            </td>
                            <td>16</td>
                            <td>
                              644 Coffman Alley, Bowling Green, Kentucky, 42101
                            </td>
                            <td>3153844562</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$300.00</td>
                          </tr>
                          <tr>
                            <td>#PT007</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient7.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html"> Joan Gardner</a>
                              </h2>
                            </td>
                            <td>25</td>
                            <td>
                              2399 Hillview Drive, San Francisco, California,
                              94103
                            </td>
                            <td>7072202603</td>
                            <td>18 Sep 2019</td>
                            <td className="text-right">$250.00</td>
                          </tr>
                          <tr>
                            <td>#PT008</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient8.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html"> Daniel Griffing</a>
                              </h2>
                            </td>
                            <td>21</td>
                            <td>
                              4914 Hilltop Haven Drive, Passaic, New Jersey,
                              07055
                            </td>
                            <td>9737739497</td>
                            <td>7 Sep 2019</td>
                            <td className="text-right">$150.00</td>
                          </tr>
                          <tr>
                            <td>#PT009</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient9.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Walter Roberson</a>
                              </h2>
                            </td>
                            <td>18</td>
                            <td>
                              1299 Star Trek Drive, Panama City, Florida, 32405
                            </td>
                            <td>8503584445</td>
                            <td>11 Sep 2019</td>
                            <td className="text-right">$100.00</td>
                          </tr>
                          <tr>
                            <td>#PT010</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient10.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Robert Rhodes</a>
                              </h2>
                            </td>
                            <td>19</td>
                            <td>
                              1214 Hamill Avenue, Del Mar, California, 92014
                            </td>
                            <td>8582595285</td>
                            <td>12 Sep 2019</td>
                            <td className="text-right">$120.00</td>
                          </tr>
                          <tr>
                            <td>#PT011</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient11.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Harry Williams</a>
                              </h2>
                            </td>
                            <td>9</td>
                            <td>
                              4566 Sampson Street, Denver, Colorado, 80202
                            </td>
                            <td>3036077075</td>
                            <td>14 Sep 2019</td>
                            <td className="text-right">$130.00</td>
                          </tr>
                          <tr>
                            <td>#PT012</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient12.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Robert Johnston</a>
                              </h2>
                            </td>
                            <td>29</td>
                            <td>
                              1996 Crummit Lane, Beatrice, Nebraska, 68310
                            </td>
                            <td>4022231492</td>
                            <td>7 Nov 2019</td>
                            <td className="text-right">$260.00</td>
                          </tr>
                          <tr>
                            <td>#PT013</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient13.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Tracy Mason</a>
                              </h2>
                            </td>
                            <td>32</td>
                            <td>4211 Vesta Drive, TOLEDO, Washington, 98591</td>
                            <td>7737265795</td>
                            <td>9 Nov 2019</td>
                            <td className="text-right">$290.00</td>
                          </tr>
                          <tr>
                            <td>#PT014</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient14.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html"> Daniel Finch</a>
                              </h2>
                            </td>
                            <td>23</td>
                            <td>
                              186 Bryan Street, Greensboro, North Carolina,
                              27409
                            </td>
                            <td>3362314023</td>
                            <td>5 Nov 2019</td>
                            <td className="text-right">$300.00</td>
                          </tr>
                          <tr>
                            <td>#PT015</td>
                            <td>
                              <h2 className="table-avatar">
                                <a
                                  href="profile.html"
                                  className="avatar avatar-sm mr-2"
                                >
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="assets/img/patients/patient15.jpg"
                                    alt="User Image"
                                  />
                                </a>
                                <a href="profile.html">Jessica Garza</a>
                              </h2>
                            </td>
                            <td>10</td>
                            <td>
                              4672 Rose Street, Schaumburg, Illinois, 60173
                            </td>
                            <td>7082788201</td>
                            <td>6 Nov 2019</td>
                            <td className="text-right">$310.00</td>
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
      </div>
      {/* /Page Wrapper */}
    </>
  );
}

export default Patient;
