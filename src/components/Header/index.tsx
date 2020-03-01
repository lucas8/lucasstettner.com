import React from "react"
import { HeaderContainer, HeaderContent, NavigationContent, NavigationLinkContainer, NavigationLink } from "./style"
import { H1, A } from "../Typography"

export default () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <H1>{`<Lucas />`}</H1>
        <NavigationContent>
          <NavigationLinkContainer>
            <NavigationLink>Projects</NavigationLink>
            <NavigationLink>Resume</NavigationLink>
            <NavigationLink>Github</NavigationLink>
          </NavigationLinkContainer>
          <A style={{ fontWeight: 600 }}>Contact Me</A>
        </NavigationContent>
      </HeaderContent>
    </HeaderContainer>
  )
}
