import React from 'react'
import Button from './button'
import { productsData } from './data'
import Section from './Section'
export default function Products() {
  return (
    <div id='ourProducts'>
      <Section title=" معرض منتجاتنا" desc="تصفح منتجاتنا و اختر الهدية المناسبة" />
    <div  className=' flex flex-col items-center '>
  <div className=" mx-auto max-w-fit py-8 sm:px-6 sm:py-12 lg:px-8">

   

    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">

      <div className="lg:col-span-4">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {productsData.map((product,index)=>(
            <li key={index}>
            <div className=" relative flex min-h-fil flex-col justify-center overflow-hidden bg-gray-50">
    <div className="absolute inset-0 bg-center dark:bg-black"></div>
    <div className="group relative m-0 flex h-96 w-72 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        <img src={product.image} alt="" />
      </div>
      <div className="text-right w-72 absolute bottom-0 right-0 z-20 m-0 bg-secondry pl-2 pr-8  pb-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
        <h1 className="text-2xl font-semibold text-primary ">{product.title}</h1>
        <h1 className="text-sm font-light text-primary ">{product.desc}</h1>
      </div>
    </div>
  </div>
</li>
          ))}
          

          
        </ul>
      </div>
    </div>
  </div>
  {/* <Button title='... المزيد ' styling='secondry' /> */}
</div>
</div>
  )
}
