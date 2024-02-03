import DoctorProfile from '@/components/DoctorProfile'
import React from 'react'

const page = async({ params }:{params:{username:string}}) => {
  const  res = await fetch(`http://localhost:8000/user/getdoctorProfile/${params.username}`,{
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
    <DoctorProfile data={data}/>
  )
}

export default page