import AdminDashboard from '@/components/Admin/dashboard/AdminDashboard'
import React from 'react'

const page = async() => {


    
    const  res = await fetch("http://localhost:8000/user/getUnverifiedDoctors",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache",
        next:{
          tags:["doctor_verify"]
        }
    });

    // console.log(res);
    const data = await res.json();
    console.log(data)
  return (
    <AdminDashboard DoctorsNo={data.DoctorList} patientsNo={data.patientsList}  data={data.doctors}/>
  )
}

export default page