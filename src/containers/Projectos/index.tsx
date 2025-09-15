import { motion } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaShoppingCart,
  FaCloudUploadAlt
} from 'react-icons/fa'
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
  GithubButton,
  SectionHeader,
  HighlightText
} from './styles'
import { JSX } from 'react'
import { cores } from '../../styles'

type Project = {
  id: number
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  icon: JSX.Element
  impact?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Otimizador de Imagens Serverless na AWS',
    description:
      'Solução 100% serverless e orientada a eventos que automatiza a otimização de imagens na nuvem. Reduz o tamanho dos arquivos em tempo real durante o upload.',
    technologies: [
      'Java',
      'AWS Lambda',
      'Amazon S3',
      'Serverless',
      'IaC (SAM)'
    ],
    githubUrl: 'https://github.com/SdneyFernandes/aws-image-optimizer.git',
    demoUrl: 'https://github.com/SdneyFernandes/aws-image-optimizer.git',
    icon: <FaCloudUploadAlt size={24} />,
    impact: 'Redução de >90% no Tamanho'
  },
  {
    id: 2,
    title: 'Plataforma de Votação "Monopólio',
    description:
      'Aplicação Full Stack em arquitetura de microsserviços para digitalizar um processo eleitoral. Inclui autenticação segura, dashboards e gestão de votos em tempo real.',
    technologies: [
      'Java',
      'Spring Boot',
      'Microsserviços',
      'Next.js',
      'PostgreSQL',
      'Docker'
    ],
    githubUrl:
      'https://github.com/SdneyFernandes/Sistema-de-Vota-o-Monop-lio---Arquitetura-Completa.git',
    demoUrl: 'https://www.meuvoto.giize.com/',
    icon: <FaServer size={24} />,
    impact: 'Disponibilidade 24/7'
  },
  {
    id: 3,
    title: 'E-commerce de Games "Eplay',
    description:
      'Interface de e-commerce reativa com foco em performance e experiência do usuário. Apresenta um catálogo dinâmico de jogos com gerenciamento de estado via Redux.',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Styled Comp.',
      'API Externa'
    ],
    githubUrl: 'https://github.com/SdneyFernandes/eplay.git',
    demoUrl: 'https://eplay-one.vercel.app/',
    icon: <FaShoppingCart size={24} />,
    impact: '30% Mais Rápido'
  }
]

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

export default function Projects() {
  return (
    <Container id="projects">
      <SectionHeader>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Title>
            Projetos com <HighlightText>Resultados Mensuráveis</HighlightText>
          </Title>
          <Description>
            Cada solução foi desenvolvida com foco em{' '}
            <HighlightText>
              performance, escalabilidade e experiência do usuário
            </HighlightText>
            . Abaixo estão cases reais onde apliquei tecnologia para resolver
            problemas complexos.
          </Description>
        </motion.div>
      </SectionHeader>

      <Cards
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project) => (
          <Card
            as={motion.div}
            variants={fadeIn}
            key={project.id}
            whileHover={{
              y: -10,
              boxShadow: `0 15px 30px ${cores.corPrimaria}20`
            }}
          >
            <Icon>
              <motion.div whileHover={{ scale: 1.1 }}>
                {project.icon}
              </motion.div>
            </Icon>
            <ProjectTitle>{project.title}</ProjectTitle>
            {project.impact && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  background: 'rgba(246, 120, 40, 0.1)',
                  color: cores.corPrimaria,
                  padding: '5px 15px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  marginBottom: '15px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}
              >
                {project.impact}
              </motion.div>
            )}
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechList>
              {project.technologies.map((tech, index) => (
                <TechItem
                  key={index}
                  as={motion.li}
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </TechItem>
              ))}
            </TechList>
            <Links>
              {project.title === 'Eplay - Plataforma de E-commerce' ? (
                <ProjectLink
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  as={motion.a}
                  whileHover={{ scale: 1.05 }}
                >
                  <FaExternalLinkAlt size={16} /> Demo
                </ProjectLink>
              ) : (
                <>
                  <ProjectLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    as={motion.a}
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaGithub size={16} /> Código
                  </ProjectLink>
                  {project.demoUrl && (
                    <ProjectLink
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      as={motion.a}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaExternalLinkAlt size={16} /> Demo
                    </ProjectLink>
                  )}
                </>
              )}
            </Links>
          </Card>
        ))}
      </Cards>

      <GithubButton
        href="https://github.com/SdneyFernandes"
        target="_blank"
        rel="noopener noreferrer"
        as={motion.a}
        whileHover={{
          scale: 1.05,
          backgroundColor: cores.corPrimaria,
          color: 'white'
        }}
      >
        <FaGithub size={18} /> Ver todos os projetos
      </GithubButton>
    </Container>
  )
}
