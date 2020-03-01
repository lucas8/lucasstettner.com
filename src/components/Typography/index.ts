import styled from "styled-components"

export const H1 = styled.h1`
  margin: 0;
  color: #f0f4f8;
  font-size: 24px;
  font-weight: 600;
`

export const H2 = styled.h2`
  margin: 0;
  color: #f0f4f870;
  font-size: 18px;
  font-weight: 600;
`

export const A = styled.a`
  font-size: 14px;
  color: #7069fa;
  cursor: pointer;
  display: inline-block;
  transition: all ease 150ms;
  font-weight: 500;

  :hover {
    color: #8888fc;
  }
`

export const P = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  color: #d9e2ec;

  a {
    color: #8888fc;
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: none;
    color: #a2a5fc;
  }
  /* larger screens read larger */
  @media (min-width: 768px) {
    font-size: 20px;
  }
`
