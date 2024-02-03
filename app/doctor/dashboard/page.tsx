import DashInfo from '@/components/doctor/dashboard/DashInfo'
import PatientsAppointment from '@/components/doctor/dashboard/PatientsAppointment'
import React from 'react'

const page = () => {
  return (
    <div className=''>
        <DashInfo/>
        <PatientsAppointment/>
    </div>
  )
}

export default page