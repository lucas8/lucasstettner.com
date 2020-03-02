import styled from "styled-components"
import { NavigationContent, NavigationLink } from "../Header/style"

export const FooterContainer = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
`

export const FooterContent = styled.div`
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

  font-size: 16px;
  font-weight: 600;
  color: #d9e2ec;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px;
    align-items: flex-start;
    height: auto;

    span {
      margin-bottom: 20px;
    }
  }
`

export const FooterNavigation = styled(NavigationContent)`
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column;

    :last-of-type {
      margin-bottom: 20px;
    }
  }
`

export const FooterItem = styled(NavigationLink)`
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`
