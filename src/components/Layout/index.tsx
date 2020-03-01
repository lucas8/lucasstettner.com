import React, { ReactNode, Fragment } from "react"
import { Helmet } from "react-helmet"
import { PageContainer, InnerPageContainer } from "./style"
import { GlobalStyles } from "../GlobalStyles"
import Header from "../Header"

interface LayoutProps {
  children?: ReactNode
}

export default ({ children }: LayoutProps) => (
  <Fragment>
    <Helmet>
      <title>Lucas Stettner</title>
    </Helmet>
    <GlobalStyles />
    <PageContainer>
      <Header />
      <InnerPageContainer>{children}</InnerPageContainer>
    </PageContainer>
  </Fragment>
)
