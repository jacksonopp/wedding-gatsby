import { IPageHeader } from './page-header.type';
export interface IFaq {
  id: string,
  question: string,
  answer: {
    answer: string
  }
}

export interface IAllFaq {
  allContentfulFaq: {
    nodes: IFaq[]
  },
  contentfulPageHeaderSection: IPageHeader
}