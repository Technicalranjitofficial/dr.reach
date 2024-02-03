"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useNavigation } from 'react-day-picker';
import { FiHome, FiLayout, FiStar, FiUser, FiUserPlus } from "react-icons/fi";
const Sidebar = () => {

    const router = usePathname();

    console.log(router)
    console.log(router.split("/"))
  return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul className="no-underline">
        
          <li className={`${router.split("/").length<4 && 'active'} `}>
            <Link href="/admin/dashboard" className="no-underline">
              <FiHome />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={`${router.includes("/admin/dashboard/appointment") && 'active' } `}>
            <Link href="/admin/dashboard/appointment" className={`no-underline ${router.includes("/admin/dashboard/appointment") && 'active' } `}>
              <FiLayout />
              <span>Appointments</span>
            </Link>
          </li>
          {/* <li>
            <a href="specialities.html">
              <i className="fe fe-users" /> <span>Specialities</span>
            </a>
          </li> */}
          <li className={`${router.includes("/admin/dashboard/doctors") && 'active' } `}>
            <Link href="/admin/dashboard/doctors"  className="no-underline">
              <FiUserPlus />
              <span>Doctors</span>
            </Link>
          </li>
          <li className={`${router.includes("/admin/dashboard/patients") && 'active' } `}>
            <Link href="/admin/dashboard/patients"  className="no-underline">
              <FiUser />
              <span>Patients</span>
            </Link>
          </li>
          <li className={`${router.includes("/admin/dashboard/reviews") && 'active' } `}>
            <Link href="/admin/dashboard/reviews"  className="no-underline">
              <FiStar />
              <span>Reviews</span>
            </Link>
          </li>
          {/* <li>
            <a href="transactions-list.html">
              <i className="fe fe-activity" /> <span>Transactions</span>
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Sidebar