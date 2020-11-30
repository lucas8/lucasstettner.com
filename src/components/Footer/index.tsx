import React from "react"
import { FooterContainer, FooterContent, FooterNavigation, FooterItem } from "./style"

export default () => (
  <FooterContainer>
    <FooterContent>
      <span>Lucas Stettner</span>
      <FooterNavigation>
        <FooterItem href="#projects">Projects</FooterItem>
        <FooterItem href="https://www.linkedin.com/in/lucas-stettner-5316231b2/">Linkedin</FooterItem>
        <FooterItem href="https://github.com/lucas8" target="_blank" rel="noopener">
          Github
        </FooterItem>
      </FooterNavigation>
    </FooterContent>
  </FooterContainer>
)
