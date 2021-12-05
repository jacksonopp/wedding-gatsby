export interface ScheduleItem {
  title: string,
  location: string,
  date: string
}

export interface AllScheduleItems {
  allContentfulScheduleItem: {
    nodes: ScheduleItem[]
  }
}