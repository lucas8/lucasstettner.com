import styled from "styled-components"

export const ProjectContainer = styled.a`
  display: flex;
  flex-direction: column;
  /* width: 400px; */
  cursor: pointer;
  text-decoration: none;
`

export const ProjectImageContainer = styled.div`
  /* width: 400px; */
  height: 185px;
  overflow: hidden;
  border-radius: 11px;
`

export const ProjectImage = styled.img<{ enlarged: boolean }>`
  object-fit: cover;
  object-position: top;
  height: 100%;
  width: 100%;
  transition: all ease 250ms;
  transform: ${({ enlarged }) => (enlarged ? `scale(1.1)` : `scale(1)`)};
`

export const ProjectTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  color: #f0f4f8;
  margin-top: 14px;
  display: inline-block;

  .icon {
    margin-left: 4px;
  }
`
