export interface TravelItem {
  address1: string,
  address2: string,
  id: string, 
  title: string,
  description: {
    description: string
  }
}

export interface AllTravelItems {
  allContentfulTravelInfo: {
    nodes: TravelItem[]
  }
}