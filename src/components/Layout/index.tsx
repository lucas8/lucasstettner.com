import React, { ReactNode, Fragment } from "react"
import { Helmet } from "react-helmet"
import { PageContainer, InnerPageContainer } from "./style"

interface LayoutProps {
  children?: ReactNode
}

export default ({ children }: LayoutProps) => (
  <Fragment>
    <Helmet>
      <title>Lucas Stettner</title>
    </Helmet>
    <PageContainer>
      {/* Header */}
      <InnerPageContainer>{children}</InnerPageContainer>
    </PageContainer>
  </Fragment>
)
