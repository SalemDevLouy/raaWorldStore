import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div>
  <div className="mx-auto max-w-screen-2xl  px-4 py-8 sm:px-6 lg:px-8 bg-primary">
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
    <div className=" p-8 md:p-12 lg:px-6 lg:py-24 text-right ">
        <div className="mx-auto max-w-xl text-center flex flex-col  md:items-end items-center gap-6 md:gap-14">
          <h2 className="text-2xl leading-snug font-bold text-white md:text-5xl md:text-right md:leading-snug">
            عالم راء لخدمات الطباعة و التصميم
          </h2>

          <p className="hidden text-white/90 sm:mt-4 sm:block text-right">
          نقدم خدمات طباعة متخصصة وأشغال يدوية متميزة، تدمج بين الإبداع والحرفية لتلبية احتياجات
           العملاء. نعمل على تصميم وطباعة مواد دعائية، بطاقات مناسبات، وهدايا مخصصة بأعلى جودة
          . نهدف لتعزيز قيمة المنتجات اليدوية وإضفاء لمسة شخصية وفريدة على كل قطعة نصنعها.
          </p>

          <Button title ='اطلب الآن' styling='primary'/>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1 ">
        <img
          alt=""
          src="/assets/products/01.jpg"
          className="rounded-xl h-72 w-full object-cover sm:h-96 md:h-full relative top-4 shadow-md hover:scale-95 transition duration-500"
        />

        <img
          alt=""
          src="/assets/products/22.jpg"
          className="hidden lg:inline rounded-xl h-40 w-full object-cover sm:h-56 md:h-full relative bottom-8 shadow-md hover:scale-95 transition duration-500"
        />
      </div>
      
    </div>
  </div>
</div>
  )
}
