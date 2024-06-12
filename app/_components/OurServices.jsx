import React from 'react'
import { ourServicesData } from './data'

export default function OurServices() {
  return (
<div id='ourServices' className='flex flex-col sm:flex-row-reverse items-center justify-center mt-16 gap-4 md:gap-10'>

{ourServicesData.map((service,index)=>(
  <div key={index}
  className={index == 1 ? "flex flex-col scale-100  items-end text-right rounded-lg border border-gray-100 bg-secondry p-4 shadow-md transition hover:shadow-lg sm:p-6 w-[300px] h-[180px] sm:h-[220px] hover:scale-110 duration-500"
    :"flex flex-col  items-end text-right rounded-lg border border-gray-100 bg-secondry p-4 shadow-md transition hover:shadow-lg sm:p-6 w-[300px] h-[180px] sm:h-[220px] hover:scale-105 duration-500"
  }
>
  <span className="w-[40px] h-[40px] rounded bg-primary p-2 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path
        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
      />
    </svg>
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

  )
}
