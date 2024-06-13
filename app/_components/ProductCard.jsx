import React from 'react'

export default function ProductCard() {
  return (
    <div className="da relative flex min-h-fil flex-col justify-center overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-center dark:bg-black"></div>
        <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                <img src="/assets/photo.png" alt="" />
            </div>
            <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110">
                <h1 className="font-serif text-2xl font-bold text-white shadow-xl">Azores</h1>
                <h1 className="text-sm font-light text-gray-200 shadow-xl">A Little Paradise in Portugal</h1>
            </div>
        </div>
    </div>
  )
}
