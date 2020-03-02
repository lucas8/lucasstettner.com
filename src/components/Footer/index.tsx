import React from "react"
import { FooterContainer, FooterContent, FooterNavigation, FooterItem } from "./style"

export default () => (
  <FooterContainer>
    <FooterContent>
      <span>Lucas Stettner</span>
      <FooterNavigation>
        <FooterItem href="https://github.com/lucas8" target="_blank" rel="noopener">
          Github
        </FooterItem>
        <FooterItem href="https://devpost.com/lucasthebear" target="_blank" rel="noopener">
          Devpost
        </FooterItem>
        <FooterItem>Resume</FooterItem>
      </FooterNavigation>
    </FooterContent>
  </FooterContainer>
)
