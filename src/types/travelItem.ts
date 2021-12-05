export interface TravelItem {
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

export interface AllTravelItems {
  allContentfulTravelInfo: {
    nodes: TravelItem[]
  }
}