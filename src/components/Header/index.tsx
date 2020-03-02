import React, { useEffect, useState } from "react"
import { HeaderContainer, HeaderContent, NavigationContent, NavigationLinkContainer, NavigationLink } from "./style"
import { H1, A } from "../Typography"

export default () => {
  const [scrollPos, setScrollPos] = useState(0)

  const trackScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight

    const scrolled = winScroll / height

    setScrollPos(scrolled)
  }

  useEffect(() => {
    window.addEventListener(`scroll`, trackScroll)

    return () => {
      window.removeEventListener(`scroll`, trackScroll)
    }
  })

  return (
    <HeaderContainer hasScrolled={!!scrollPos}>
      <HeaderContent>
        <a href="/">
          <H1>{`<Lucas />`}</H1>
        </a>
        <NavigationContent>
          <NavigationLinkContainer>
            <NavigationLink href="#projects">Projects</NavigationLink>
            <NavigationLink>Resume</NavigationLink>
            <NavigationLink href="https://github.com/lucas8" target="_blank" rel="noopener">
              Github
            </NavigationLink>
          </NavigationLinkContainer>
          <A style={{ fontWeight: 600, marginLeft: `auto` }} href="mailto:lucas.stettner@gmail.com">
            Contact Me
          </A>
        </NavigationContent>
      </HeaderContent>
    </HeaderContainer>
  )
}
