import React from 'react'
import { ourServicesData } from './data'
import Section from './Section'
import Image from 'next/image'
export default function OurServices() {
  return (
    <div id='ourServices'>
      <Section title="خدماتنا" desc="خدماتنا عديدة و مميزة و كما تمتاز بجودة عالية عن منافسينا"/>
      
<div  className='flex flex-col sm:flex-row-reverse items-center justify-center mt-16 gap-4 md:gap-10'>

{ourServicesData.map((service,index)=>(
  <div key={index}
  className={index == 1 ? "flex flex-col scale-100  items-end text-right rounded-lg border border-gray-100 bg-secondry p-4 shadow-md transition hover:shadow-lg sm:p-6 w-[300px] h-[180px] sm:h-[220px] hover:scale-110 duration-500"
    :"flex flex-col  items-end text-right rounded-lg border border-gray-100 bg-secondry p-4 shadow-md transition hover:shadow-lg sm:p-6 w-[300px] h-[180px] sm:h-[220px] hover:scale-105 duration-500"
  }
>
  <span className="w-[40px] h-[40px] rounded bg-primary p-2 text-white">
   <Image src={service.icon} width={30} height={30} />
  </span>

  
    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
      {service.title} 
    </h3>
  

  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    {service.desc}
  </p>
</div>
))}
</div>
</div>

  )
}
