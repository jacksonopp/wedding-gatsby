import React from 'react'
import { BackgroundColor } from '../types/color.enum'

interface Props {
  even: boolean,
  evenColor: BackgroundColor,
  oddColor: BackgroundColor
}

const ColorRow: React.FC<Props> = ({even, evenColor, oddColor, children}) => {
  return (
    <section 
      className={`py-4 w-screen flex flex-col items-center bg-wedding-${even ? evenColor : oddColor}`}
    >
      {children}
    </section>
  )
}

export default ColorRow
