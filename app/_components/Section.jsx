import React from 'react'

export default function Section({title,desc}) {
  return (
    <div className="flex flex-col items-center text-center mt-10">
      <div className='flex gap-10'>
        <span className='border-t-4 w-[100px] md:w-[300px] border-primary'></span>
        <h2 className=" font-bold flex-1 text-gray-900 text-3xl sm:text-4xl">{title}</h2>
        <span className='border-b-4 w-[100px] md:w-[300px] border-primary'></span>
      </div>
      

      <p className="mt-4 max-w-md text-gray-500 text-lg sm:text-xl mx-8">
        {desc}
      </p>
    </div>
  )
}
