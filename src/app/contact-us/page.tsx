import Navbar from '@/component/Navbar'
import AppointmentSection from '@/modules/home/component/Appointment'
import React from 'react'

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
          <Navbar />
        </div>
        <AppointmentSection/>
    </div>
  )
}

export default page