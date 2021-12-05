export interface ScheduleItem {
  title: string,
  location: string,
  date: string
  id: string
}

export interface AllScheduleItems {
  allContentfulScheduleItem: {
    nodes: ScheduleItem[]
  }
}