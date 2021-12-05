export interface IScheduleItem {
  title: string,
  location: string,
  date: string
  id: string
}

export interface IAllScheduleItems {
  allContentfulScheduleItem: {
    nodes: IScheduleItem[]
  }
}