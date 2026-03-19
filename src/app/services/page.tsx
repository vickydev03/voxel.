import Navbar from '@/component/Navbar'
import ServicesChoiceView from '@/modules/home/view/ServicesChoiceView'
import React from 'react'

function page() {
  return (
    <div className=''>
      <div className=" z-50 absolute w-full">
                <Navbar />
              </div>
        <ServicesChoiceView/>
    </div>
  )
}

export default page