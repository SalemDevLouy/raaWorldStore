import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div className="bg-white shadow-xl">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-row-reverse h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-primary" href="#">
          <span className="sr-only">Home</span>
          <Image
      src="/assets/logo.png"
      width={40}
      height={50}
      alt="Picture of the author"
    />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex flex-row-reverse items-center gap-12 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-primary" href="/"> الرئيسية</a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-primary" href="#ourServicrs"> خدماتنا </a>
            </li>

            
            <li>
              <a className="text-gray-500 transition hover:text-primary" href="#">  تواصل معنا </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-primary" href="#">كل المنتجات</a>
            </li>
          </ul>
        </nav>
      </div>
      

      <div className="flex items-center gap-4 ">
      <div className="hidden md:flex">
            <a
              href="#"
              className="inline-flex gap-2 rounded border border-white bg-primary  px-12 py-3 text-sm font-medium text-secondry transition duration-500 hover:bg-secondry hover:text-primary focus:outline-none focus:ring focus:ring-yellow-400"
            ><span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">&larr; </span>
              اطلب الآن
              
      
   
            </a>
          </div>

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
