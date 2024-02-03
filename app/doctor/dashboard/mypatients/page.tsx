import Mypatients from '@/components/doctor/dashboard/Mypatients'
import React from 'react'

interface Data{
    Fname:string,
    Lname:string,
    email:string,
    dob:string,
    contact:string,
    address:{
        address: String;
        city:    String;
        state:   String;
        country: String;
        pincode: String;
    },
    userId:string,
    bloodGroup:string;
    profilePic:string
}

const data:Data[]=[
    {
        Fname:"Ranjit",
        Lname:"Das",
        address:{
            address:"BBSR",
            city:"BBSR",
            country:"India",
            pincode:"751024",
            state:"Odisha"
        },
        bloodGroup:"O+",
        contact:"9631627104",
        dob:"2000-07-17",
        email:"21053420@kiit.ac.in",
        profilePic:"/assets/doctor-1.jpg",
        userId:"#PT_0112"

    },

    {
        Fname:"Ranjit",
        Lname:"Das",
        address:{
            address:"BBSR",
            city:"BBSR",
            country:"India",
            pincode:"751024",
            state:"Odisha"
        },
        bloodGroup:"O+",
        contact:"9631627104",
        dob:"2000-07-17",
        email:"21053420@kiit.ac.in",
        profilePic:"/assets/doctor-2.jpg",
        userId:"#PT_0112"

    }
]

const page = () => {
  return (
   <>
   
   <div className='row row-grid'>
   {data.map((d,i)=>{
    return <Mypatients data={d}/>
   })}
   </div>
   </>
  )
}

export default page