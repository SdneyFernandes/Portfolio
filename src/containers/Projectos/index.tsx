import { useEffect } from 'react'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaGlobe
} from 'react-icons/fa'
import ScrollReveal from 'scrollreveal'
import {
  Container,
  Title,
  Description,
  Cards,
  Card,
  Icon,
  ProjectTitle,
  ProjectDescription,
  TechList,
  TechItem,
  Links,
  ProjectLink,
  GithubButton
} from './styles'

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
  icon: JSX.Element
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Eplay',
    description:
      'Plataforma de e-commerce especializada em jogos eletrônicos com sistema de carrinho e pagamento integrado.',
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    githubUrl: 'https://github.com/SdneyFernandes/eplay',
    demoUrl: '#',
    icon: <FaShoppingCart size={24} />
  },
  {
    id: 2,
    title: 'Memelandia',
    description:
      'Rede social para compartilhamento de memes com funcionalidades de curtir, comentar e salvar posts.',
    technologies: ['Java', 'Microsservices', 'Spring', 'Docker'],
    githubUrl: 'https://github.com/SdneyFernandes/memelandia',
    demoUrl: '#',
    icon: <FaGlobe size={24} />
  }
]

export default function Projects() {
  useEffect(() => {
    ScrollReveal().reveal('.section-title', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.project-card', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      interval: 100,
      reset: true
    })

    ScrollReveal().reveal('.github-button', {
      delay: 400,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })
  }, [])

  return (
    <Container id="projects">
      <Title className="section-title">Meus Projetos</Title>
      <Description className="section-title">
        Aqui estão alguns dos projetos que desenvolvi. Cada um representa um
        desafio único e uma oportunidade de aprendizado.
      </Description>

      <Cards>
        {projects.map((project) => (
          <Card key={project.id} className="project-card">
            <Icon>{project.icon}</Icon>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.technologies.map((tech, index) => (
                <TechItem key={index}>{tech}</TechItem>
              ))}
            </TechList>
            <Links>
              <ProjectLink
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={16} /> Código
              </ProjectLink>
              {project.demoUrl && (
                <ProjectLink
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={16} /> Demo
                </ProjectLink>
              )}
            </Links>
          </Card>
        ))}
      </Cards>

      <GithubButton
        href="https://github.com/SdneyFernandes"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        <FaGithub size={18} /> Ver mais no GitHub
      </GithubButton>
    </Container>
  )
}
