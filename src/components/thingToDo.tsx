import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import React from "react"

interface Props {
  link: string,
  title: string,
  image: IGatsbyImageData
}

const ThingToDo: React.FC<Props> = ({link, title, image}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <a href={link} target="_blank" id={`img-${title}`} className="rounded-full p-1 border-2 border-gray-700">
        <GatsbyImage
          image={image}
          alt={title}
          className="rounded-full"
        />
      </a>
      <label htmlFor={`img-${title}`} className="md:text-3xl">{title}</label>
      <a href={link} target="_blank" className="border border-gray-700 py-2 px-5 hover:bg-gray-300 hover:bg-opacity-50">Visit</a>
    </div>
  )
}

export default ThingToDo
