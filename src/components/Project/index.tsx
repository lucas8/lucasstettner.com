import React, { useState } from "react"
import { ProjectContainer, ProjectImage, ProjectImageContainer, ProjectTitle } from "./style"
import { H2, P } from "../Typography"
import ExternalLink from "../ExternalLink"

export interface ProjectProps {
  title: string
  image: string
  description: string
  link?: string
}

export default (props: ProjectProps) => {
  const [hovered, setHover] = useState(false)

  const { title, image, description, link } = props

  return (
    <ProjectContainer
      href={link}
      target="_blank"
      rel="noopener"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ProjectImageContainer>
        <ProjectImage enlarged={hovered} src={image} />
      </ProjectImageContainer>
      <ProjectTitle>
        {title}
        {link && <ExternalLink />}
      </ProjectTitle>
      <P style={{ fontSize: 18, opacity: 0.5, marginTop: 4 }}>{description}</P>
    </ProjectContainer>
  )
}
