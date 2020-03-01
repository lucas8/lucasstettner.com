import styled from "styled-components"
import { A } from "../Typography"

export const HeaderContainer = styled.header<{ hasScrolled: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: ${({ hasScrolled }) => (hasScrolled ? `rgba(22, 22, 26, 0.7)` : `transparent`)};
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  transition: all ease 250ms;
  backdrop-filter: ${({ hasScrolled }) => (hasScrolled ? `blur(5px)` : `none`)};
  z-index: 2;
  border-bottom: ${({ hasScrolled }) => (hasScrolled ? `1px solid rgba(255, 255, 255, 0.1)` : `none`)};
  transition: border-bottom 150ms ease 0s, top 250ms ease 0s, background-color 300ms ease 0s;
`

export const HeaderContent = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  flex-shrink: 0;
  height: 68px;
  max-width: 1024px;
  padding: 0 32px;
  width: 100%;
  margin: 0 auto;
`

export const NavigationContent = styled.div`
  display: flex;
  flex-grow: 1;
`

export const NavigationLinkContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding-right: 30px;
`

export const NavigationLink = styled(A)`
  color: #d9e2ec;
  margin: 0 30px;

  :hover {
    color: #fff;
  }
`
