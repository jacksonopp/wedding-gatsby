import React from "react"
import { usePageHeader } from "../hooks/usePageHeader"

interface Props {
}

const PageHeader: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default PageHeader
