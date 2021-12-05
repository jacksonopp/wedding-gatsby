import React from 'react'
import { BackgroundColor } from '../types/color.enum'

interface Props {
  color: BackgroundColor,
  pageTitle: string;
}

const PageDescription: React.FC<Props> = ({color, pageTitle, children}) => {
  return (
    <section className={`py-12 bg-wedding-${color} flex flex-col items-center`}>
      <h1 className="text-center text-3xl md:text-5xl hidden md:block ">
        {pageTitle}
      </h1>
      <div className="w-11/12 md:w-9/12">
        {children}
      </div>
    </section>
  )
}

export default PageDescription
