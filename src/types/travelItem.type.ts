export interface ITravelItem {
  address1: string,
  address2: string,
  id: string, 
  title: string,
  subtitle: string,
  phone: string,
  url: string,
  description: {
    description: string
  }
}

export interface IAllTravelItems {
  allContentfulTravelInfo: {
    nodes: ITravelItem[]
  }
}