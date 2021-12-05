import { ImageDataLike } from "gatsby-plugin-image";

export interface IThingToDo {
  url: string,
  title: string,
  image: ImageDataLike,
  id: string
}

export interface IAllthingsToDo {
  allContentfulThingToDo: {
    nodes: IThingToDo[]
  }
}