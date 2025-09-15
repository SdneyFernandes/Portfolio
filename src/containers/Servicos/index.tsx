import { motion } from 'framer-motion'
import { FaGlobe, FaShoppingCart, FaCogs } from 'react-icons/fa'
import {
  Container,
  Title,
  Description,
  ServiceTitle,
  ServiceDescription,
  FeatureItem,
  SectionHeader,
  ServiceButton,
  ServiceCard,
  ServiceContent,
  ServiceFeatures,
  ServiceIcon,
  ServicesGrid,
  HighlightText
} from './styles'

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

const services = [
  {
    icon: <FaGlobe size={32} />,
    title: 'Cloud & Arquitetura Serverless',
    description:
      'Implementação de soluções modernas na nuvem AWS, com foco em automação, arquitetura orientada a eventos e otimização de custos.',
    features: [
      'Funções com AWS Lambda',
      'Armazenamento com Amazon S3',
      'Infraestrutura como Código (IaC) com SAM',
      'Automação de Processos na Nuvem'
    ],
    cta: 'Ver Projetos de Cloud'
  },
  {
    icon: <FaShoppingCart size={32} />,
    title: 'Frontend & Interfaces Reativas',
    description:
      'Desenvolvimento de interfaces de usuário dinâmicas, intuitivas e que proporcionam uma experiência de uso memorável.',
    features: [
      'Aplicações com React.js & TypeScript',
      'Gerenciamento de Estado (Redux/Context)',
      'Componentização e Design Systems',
      'Otimização de Performance (WPO)'
    ],
    cta: 'Ver Projetos Frontend'
  },
  {
    icon: <FaCogs size={32} />,
    title: 'Desenvolvimento Backend & Microsserviços',
    description:
      'Criação do núcleo de sistemas, com foco em performance, segurança e escalabilidade, utilizando o ecossistema Java e Spring.',
    features: [
      'APIs RESTful com Spring Boot',
      'Arquitetura de Microsserviços',
      'Segurança com Spring Security & JWT',
      'Persistência de Dados com JPA/Hibernate'
    ],
    cta: 'Ver Projetos Backend'
  }
]

export default function Services() {
  return (
    <Container id="services">
      <SectionHeader>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Title>
            Minhas <HighlightText>Especialidades</HighlightText> Técnicas
          </Title>
          <Description>
            Meu foco é a{' '}
            <HighlightText>
              construção de software robusto e escalável
            </HighlightText>{' '}
            aplicando as melhores práticas de arquitetura e desenvolvimento para
            criar soluções.
          </Description>
        </motion.div>
      </SectionHeader>

      <ServicesGrid
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {services.map((service, index) => (
          <ServiceCard
            as={motion.div}
            variants={fadeIn}
            key={index}
            whileHover={{
              y: -10,
              boxShadow: '0 15px 30px rgba(246, 120, 40, 0.2)'
            }}
          >
            <ServiceIcon>
              <motion.div whileHover={{ scale: 1.1 }}>
                {service.icon}
              </motion.div>
            </ServiceIcon>
            <ServiceContent>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, i) => (
                  <FeatureItem key={i}>{feature}</FeatureItem>
                ))}
              </ServiceFeatures>
            </ServiceContent>
            <ServiceButton
              href="#contact"
              as={motion.a}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {service.cta}
            </ServiceButton>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </Container>
  )
}
