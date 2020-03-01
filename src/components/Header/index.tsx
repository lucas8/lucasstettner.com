import React from "react"
import { HeaderContainer, HeaderContent, NavigationContent } from "./style"
import { H1, A } from "../Typography"

export default () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <H1>{`<Lucas />`}</H1>
        <NavigationContent>
          <A>Contact Me</A>
        </NavigationContent>
      </HeaderContent>
    </HeaderContainer>
  )
}
