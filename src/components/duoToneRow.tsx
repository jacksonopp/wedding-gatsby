import React, { ReactNode } from "react"
import { BackgroundColor } from "../types/color"

interface Props {
  leftChildren: ReactNode
  leftColor: BackgroundColor
  rightChildren: ReactNode
  rightColor: BackgroundColor
}

const DuoToneRow: React.FC<Props> = ({
  leftColor,
  leftChildren,
  rightColor,
  rightChildren,
}) => {
  return (
    <section className="w-screen md:flex justify-around">
      <div
        className={`flex flex-col items-center justify-center w-screen md:w-1/2 py-4 md:py-8 bg-wedding-${leftColor}`}
      >
        {leftChildren}
      </div>
      <div
        className={`flex flex-col items-center justify-center w-screen md:w-1/2 py-4 md:py-8 border-b md:border-0 border-black bg-wedding-${rightColor}`}
      >
        {rightChildren}
      </div>
    </section>
  )
}

export default DuoToneRow
