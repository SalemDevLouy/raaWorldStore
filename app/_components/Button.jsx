import React from 'react'

export default function Button({title,styling}) {
  return (
    <div >
    <a
      href="https://forms.gle/CpuZGc25DATucxHx6" target='_blanck'
      className={styling === 'primary' ? "inline-flex gap-2 rounded border border-white bg-secondry px-12 py-3 text-sm font-medium text-primary transition duration-500 hover:bg-primary hover:text-secondry"
        :"inline-flex gap-2 rounded border border-white bg-primary  px-12 py-3 text-sm font-medium text-secondry transition duration-500 hover:bg-secondry hover:text-primary "}
    ><span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">&larr; </span>
      {title}
    </a>
  </div>
  )
}
