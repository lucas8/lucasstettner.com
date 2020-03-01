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
      <link rel="stylesheet" type="text/css" href="https://rsms.me/inter/inter.css" />
    </Helmet>
    <GlobalStyles />
    <PageContainer>
      <Header />
      <InnerPageContainer>{children}</InnerPageContainer>
    </PageContainer>
  </Fragment>
)
