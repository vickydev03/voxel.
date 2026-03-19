import Navbar from '@/component/Navbar'
import ServicesView from '@/modules/home/view/ServiceView'
import React from 'react'

function page() {
  return (
    <div>
      <div className=" z-50 absolute w-full">
                <Navbar />
              </div>
        <ServicesView/>
    </div>
  )
}

export default page
