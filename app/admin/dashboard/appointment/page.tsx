import Appointment from '@/components/Admin/dashboard/Appointment';
import React from 'react'

const page = async() => {
    const  res = await fetch("http://localhost:8000/user/getAppointments",{
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
    <Appointment data={data}/>
  )
}

export default page