import styled from "styled-components"

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  max-width: 100%;
`

export const InnerPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  flex: 1 0 auto;
  width: 100%;
  padding: 0 16px;
  padding-top: 64px;
  padding-bottom: 128px;
  @media (max-width: 768px) {
    max-width: 100%;
  }
`
