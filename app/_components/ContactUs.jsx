import React from 'react'
import Section from './Section'
import { contactUsData } from './data'

export default function 
() {
  return (
    <div id='contactUs' className='flex flex-col justify-center items-center'>
        <Section title="تواصل معنا" desc="تواصل معنا للاستفسار و طلب خدماتنا عبر وسائل التواصل التالية"/>
        <div className='mt-8 grid md:w-[700px] mx-8 justify-items-center grid-cols-1 gap-4 sm:grid-cols-3 md:gap-2'>
          {contactUsData.map((contact,index)=>(
              <div className="bg-secondry  w-[180px] max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
              <div className="flex flex-col items-center py-10">
                    <svg className="h-20 w-20" fill={contact.color} viewBox="0 0 24 24" aria-hidden="true">
                      {contact.pathsvg}
                    </svg>
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{contact.socielmedia}</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{contact.userName}</span>
                  {contact.socielmedia === 'whatsapp'?
                  <div className="flex mt-4 md:mt-6">
                  <a href={contact.messaging} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">مراسلة</a>
                  
                  </div>
                  :
                  <>
                  <div className="flex mt-4 md:mt-6">
                  <a href={contact.link} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">زيارة الصفحة</a>
                  </div>
                  <div className="flex mt-2">
                      <a href={contact.messaging} target='_blank' className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">مراسلة</a>  
                  </div>
                  </>
                  }
                  
              </div>
          </div>
          ))}
        
        
        </div>
        
    </div>
  )
}
