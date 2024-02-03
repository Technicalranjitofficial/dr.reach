import Footer from "@/components/Footer";
import Logout from "@/components/Logout";
import { authOption } from "@/lib/AuthOptions/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Layout({ children }: { children: React.ReactNode }) {

  const session = await getServerSession(authOption);
  if(!session || session.data.role !== "NORMAL"){
    return redirect("/");
  }

    return(
        <>
      {/* Main Wrapper */}
      <div className="main-wrapper pt-28  w-full md:px-10 mx-auto overflow-x-hidden">
        {/* Header */}
     
        {/* /Header */}
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
                      Dashboard
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Dashboard</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              {/* Profile Sidebar */}
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img
                          src="/assets/doctor-1.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>{session.data.Fname??"Update Fname"} {session.data.Lname??"Lname"}</h3>
                        <div className="patient-details">
                          <h5>
                            <i className="fas fa-birthday-cake" /> {session.data.dob??"update dob"},
                            {/* 38 years */}
                          </h5>
                          <h5 className="mb-0">
                            <i className="fas fa-map-marker-alt" /> {session.data.address?.address??"update address"}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li className="active">
                          <Link href="/user/dashboard">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </Link>
                        </li>
                        {/* <li>
                          <a href="favourites.html">
                            <i className="fas fa-bookmark" />
                            <span>Favourites</span>
                          </a>
                        </li> */}
                        <li>
                          <Link href="/user/dashboard/appointment">
                            <i className="fas fa-bookmark" />
                            <span>Appointments</span>
                          </Link>
                        </li>
                         <li>
                          <Link href="/user/dashboard/medicalhistory">
                            <i className="fas fa-bookmark" />
                            <span>Medical History</span>
                          </Link>
                        </li>
                        {/* <li>
                          <a href="chat.html">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </a>
                        </li> */}
                        <li>
                          <Link href="/user/dashboard/profilesettings">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/user/dashboard/applydoctor">
                            <i className="fas fa-lock" />
                            <span>Apply Doctor</span>
                          </Link>
                        </li>
                        <li>
                          <Link href="#">
                            <i className="fas fa-sign-out-alt" />
                           <Logout/>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              {/* / Profile Sidebar */}
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="card">
                  <div className="card-body pt-0">
                 
                    {/* Tab Content */}
                    

                    {children}

                    <div className="tab-content pt-0">
                     
                    </div>
                    {/* Tab Content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
        {/* Footer */}
    
   
        {/* /Footer */}
      </div>
    </>
    )
}