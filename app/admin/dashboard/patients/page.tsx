import Appointment from '@/components/Admin/dashboard/Appointment';
import PatientsList from '@/components/Admin/dashboard/PatientsList';
import React from 'react'

const page = async() => {
    const  res = await fetch("http://localhost:8000/user/getPatients",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer "+localStorage.getItem("token")
        },
        cache: "no-cache"
    });

    // console.log(res);
    const data = await res.json();
    console.log(data)
  return (
    <PatientsList data={data}/>
  )
}

export default page