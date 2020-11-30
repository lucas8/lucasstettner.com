import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import { HeroContainer } from "../components/HeroContainer"
import { P, H2 } from "../components/Typography"
import Project from "../components/Project"
import projects from "../data/projects"

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #f0f4f8;
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`

export default () => (
  <Layout>
    <HeroContainer>
      <Title>Lucas Stettner</Title>
      <P style={{ paddingTop: 24 }}>
        I’m a <a>fullstack developer</a> and <a>high school student</a> living in Brooklyn. I’m currently working at
        Primer building tools for homeschoolers.
      </P>
      <H2 style={{ marginTop: 128, marginBottom: 24 }} id="projects">
        Featured Projects
      </H2>
      <ProjectContainer>
        {projects.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            image={project.image}
            description={project.description}
            link={project.link}
          />
        ))}
      </ProjectContainer>
    </HeroContainer>
  </Layout>
)
