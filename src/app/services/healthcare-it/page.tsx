import Navbar from '@/component/Navbar'
import HealthcareITView from '@/modules/home/view/HealthcareITView'
import React from 'react'

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
          <Navbar />
        </div>
        <HealthcareITView/>
    </div>
  )
}

export default page
