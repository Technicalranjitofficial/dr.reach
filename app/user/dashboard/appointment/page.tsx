import AppointnmnetTab from '@/components/User/dashboard/AppointnmnetTab'
import Tab from '@/components/User/dashboard/Tab';
// import TestTable from '@/components/dashboard/User/dashboard/Tables/TestTable';
import React from 'react'
const data = [
    {
      doctorName: "Dr. Ruby Perrin",
      doctorImage: "/assets/doctor-1.jpg",
      AppointmentDate: "14 Nov 2019",
      BookedDate: "12 Nov 2019",
      Amount: "$160",
      status: "Confirmed",
      specialization: "MBBS",
    },
  
    {
      doctorName: "Dr. Ramesh Thakur",
      doctorImage: "/assets/doctor-2.jpg",
      AppointmentDate: "15 Nov 2021",
      BookedDate: "13 Nov 2022",
      Amount: "$505",
      status: "Pending",
      specialization: "Teeth",
    },
  ];
const page = () => {
  return (
   <>
    <Tab  title='Appointment'  />
    <AppointnmnetTab data={data}/>
   </>
  )
}

export default page