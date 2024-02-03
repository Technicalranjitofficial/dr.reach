import DashHeader from '@/components/DashHeader'
import Sidebar from '@/components/doctor/dashboard/Sidebar'
import { authOption } from '@/lib/AuthOptions/authOptions'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function Layout({children}:{children:React.ReactNode}) {

    const session = await getServerSession(authOption);
    if(!session || session.data.role !== "DOCTOR"){
        return redirect("/");
    }
  return (
    <>
  {/* Main Wrapper */}
  <div className="main-wrapper pt-28 overflow-y-hidden md:px-10 overflow-x-hidden">
   {/* Header */}

{/* <DashHeader/> */}
   {/* Header */}
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
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
            {/* Profile Sidebar */}
           <Sidebar/>
            {/* /Profile Sidebar */}
          </div>
          <div className="col-md-7 col-lg-8 col-xl-9">
         {children}




          </div>




          
        </div>
      </div>
    </div>
    {/* /Page Content */}





    {/* Footer */}
  
    {/* /Footer */}
  </div>
  {/* /Main Wrapper */}
</>

  )
}

