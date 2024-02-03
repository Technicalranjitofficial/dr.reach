import AppointnmnetTab from '@/components/User/dashboard/AppointnmnetTab'
import MedicalTab from '@/components/User/dashboard/MedicalTab'
import Tab from '@/components/User/dashboard/Tab'
import React from 'react'

const data = [
    {
        id:"#AP977",
        date:"16 Nov 2019",
        description:"Appointment Booking",
        attachment:"dental-test.pdf",
        created:{
            name:"Dr. Ruby Perrin",
            image:"/assets/doctor-1.jpg",
            specialization:"MBBS, MD"
        }
    },
    {
        id:"#AP974",
        date:"16 Nov 2022",
        description:"Teeth Cleaning",
        attachment:"dental-test.pdf",
        created:{
            name:"Dr. Rohan Karn",
            image:"/assets/doctor-2.jpg",
            specialization:"MBBS, MD"
        }
    },


    {
        id:"#AP933",
        date:"16 Nov 2021",
        description:"Mouth Cleaning",
        attachment:"dental-test.pdf",
        created:{
            name:"Dr. Aniket Karn",
            image:"/assets/doctor-3.jpg",
            specialization:"MBBS, MD"
        }
    },

]
const page = () => {
  return (
  <>
    <Tab title='Medical History'/>
    <MedicalTab data={data}/>
  </>
  )
}

export default page