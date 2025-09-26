import { motion } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaServer,
  FaShoppingCart,
  FaCloudUploadAlt,
  FaProjectDiagram,
  FaBell
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
    title: 'NotificaHub - Central de Notificações',
    description:
      'Uma solução inteligente que centraliza todos os comunicados de uma empresa (e-mail, SMS, etc.). Outros sistemas simplesmente pedem "envie esta mensagem", e o NotificaHub cuida de todo o resto de forma segura e testada.',
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'TDD',
      'OpenFeign'
    ],
    githubUrl: 'https://github.com/SdneyFernandes/NotificaHub.git',
    demoUrl: 'https://github.com/SdneyFernandes/NotificaHub.git',
    icon: <FaBell size={24} />,
    impact: 'API Segura & Testada'
  },
  {
    id: 2,
    title: 'Sistema de Detecção de Fraudes em Tempo Real',
    description:
      'Um sistema de segurança que simula a análise de milhares de transações financeiras por segundo para detectar fraudes instantaneamente, antes que o prejuízo aconteça.',
    technologies: ['Java', 'Kafka', 'Kubernetes', 'Docker', 'Microserviços'],
    githubUrl:
      'https://github.com/SdneyFernandes/sistema-deteccao-fraudes-kafka', // Verifique o link
    demoUrl: undefined,
    icon: <FaProjectDiagram size={24} />,
    impact: 'Análise em Tempo Real'
  },
  {
    id: 3,
    title: 'Plataforma de Votação "Monopólio"',
    description:
      'Uma plataforma online completa que transforma votações manuais em papel em um processo digital, seguro e transparente para comunidades acadêmicas.',
    technologies: [
      'Java',
      'Spring Boot',
      'Microsserviços',
      'Next.js',
      'PostgreSQL'
    ],
    githubUrl:
      'https://github.com/SdneyFernandes/Sistema-de-Vota-o-Monop-lio---Arquitetura-Completa.git',
    demoUrl: 'https://www.meuvoto.giize.com/',
    icon: <FaServer size={24} />,
    impact: 'Disponibilidade 24/7'
  },
  {
    id: 4,
    title: 'Otimizador de Imagens na Nuvem (AWS)',
    description:
      'Uma ferramenta automática na nuvem da Amazon (AWS) que recebe imagens pesadas e as devolve otimizadas para a web, tornando qualquer site muito mais rápido.',
    technologies: ['Java', 'AWS Lambda', 'Amazon S3', 'Serverless', 'IaC'],
    githubUrl: 'https://github.com/SdneyFernandes/aws-image-optimizer.git',
    demoUrl: undefined,
    icon: <FaCloudUploadAlt size={24} />,
    impact: 'Redução de >90% no Tamanho'
  },
  {
    id: 5,
    title: 'E-commerce de Games "Eplay"',
    description:
      'A vitrine de uma loja de games online, construída para ser extremamente rápida e fácil de usar em qualquer dispositivo, seja no computador ou no celular.',
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
