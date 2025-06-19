import { motion } from 'framer-motion'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaServer,
  FaCalendarAlt,
  FaCheckDouble,
  FaExchangeAlt,
  FaBoxes,
  FaHeartbeat
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
    title: 'Eplay - Plataforma de E-commerce',
    description:
      'Solução completa de e-commerce para games com carrinho, checkout e dashboard administrativo. Implementei otimizações que reduziram o tempo de carregamento em 40%.',
    technologies: ['React', 'TypeScript', 'Redux', 'Styled Components'],
    githubUrl: 'https://github.com/SdneyFernandes/eplay',
    demoUrl: '#',
    icon: <FaShoppingCart size={24} />,
    impact: '40% mais rápido'
  },
  {
    id: 2,
    title: 'Memelândia - Rede Social (Microserviços)',
    description:
      'Arquitetura distribuída com 5 microsserviços independentes, alcançando 99.9% de uptime. Implementei monitoramento com Prometheus e rastreamento distribuído com Zipkin.',
    technologies: [
      'Spring Boot',
      'Docker',
      'Kubernetes',
      'Prometheus',
      'Zipkin'
    ],
    githubUrl: 'https://github.com/SdneyFernandes/memelandia',
    icon: <FaServer size={24} />,
    impact: '99.9% uptime'
  },
  {
    id: 3,
    title: 'Sistema de Agendamento com Fuso e Conflitos',
    description:
      'Backend para agendamentos com detecção de conflitos e suporte a múltiplos fusos horários. Envia confirmações por e-mail e permite cancelamento automático com regras.',
    technologies: ['Spring Boot', 'PostgreSQL', 'Java Time', 'Mail', 'Docker'],
    githubUrl: 'https://github.com/SdneyFernandes/scheduling-service',
    icon: <FaCalendarAlt size={24} />,
    impact: 'Agendamentos sem conflito'
  },
  {
    id: 4,
    title: 'Workflow de Aprovações',
    description:
      'Sistema para aprovar solicitações em múltiplas etapas com regras configuráveis. Suporta auditoria, logs e diferentes perfis de aprovadores.',
    technologies: [
      'Spring Boot',
      'PostgreSQL',
      'RabbitMQ',
      'Spring StateMachine'
    ],
    githubUrl: 'https://github.com/SdneyFernandes/approval-workflow',
    icon: <FaCheckDouble size={24} />,
    impact: 'Fluxo de aprovação automatizado'
  },
  {
    id: 5,
    title: 'Integração com ERP via Webhook',
    description:
      'Microserviço que consome APIs de ERPs e lida com eventos via webhook. Implementa retry, fallback e autenticação com HMAC.',
    technologies: ['Spring Boot', 'Webhook', 'Retry', 'Docker', 'HMAC'],
    githubUrl: 'https://github.com/SdneyFernandes/erp-integration-service',
    icon: <FaExchangeAlt size={24} />,
    impact: 'Integração robusta com ERPs'
  },
  {
    id: 6,
    title: 'Controle de Estoque com Reposição Automática',
    description:
      'API que monitora níveis de estoque e dispara alertas de reposição baseados em limite mínimo. Suporte a múltiplos armazéns.',
    technologies: ['Spring Boot', 'PostgreSQL', 'Redis', 'Scheduler', 'Docker'],
    githubUrl: 'https://github.com/SdneyFernandes/stock-alert-service',
    icon: <FaBoxes size={24} />,
    impact: 'Reposição inteligente de estoque'
  },
  {
    id: 7,
    title: 'Dashboard de Saúde de Serviços',
    description:
      'API que expõe métricas como memória, threads e tempo de resposta dos serviços. Integra com Prometheus e Grafana.',
    technologies: [
      'Spring Boot',
      'Micrometer',
      'Prometheus',
      'Grafana',
      'Docker'
    ],
    githubUrl: 'https://github.com/SdneyFernandes/health-dashboard',
    icon: <FaHeartbeat size={24} />,
    impact: 'Monitoramento de APIs'
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
