import { motion } from 'framer-motion'
import {
  FaGlobe,
  FaShoppingCart,
  FaCogs,
  FaHeadset,
  FaMobileAlt,
  FaChartLine
} from 'react-icons/fa'
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
    title: 'Sites Profissionais',
    description:
      'Desenvolvimento de websites modernos e responsivos que representam sua marca e convertem visitantes em clientes.',
    features: [
      'Design responsivo e acessível',
      'Otimização SEO avançada',
      'Integração com redes sociais',
      'Performance de alto nível'
    ],
    cta: 'Quero um site'
  },
  {
    icon: <FaShoppingCart size={32} />,
    title: 'E-commerce Completo',
    description:
      'Lojas virtuais de alto desempenho com taxa de conversão otimizada e experiência de compra premium.',
    features: [
      'Checkout seguro e otimizado',
      'Integração com marketplaces',
      'Painel administrativo completo',
      'Relatórios de desempenho'
    ],
    cta: 'Quero minha loja'
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: 'Aplicativos Web Progressivos',
    description:
      'PWAs com experiência de app nativo, funcionamento offline e engajamento aumentado.',
    features: [
      'Instalação direta do navegador',
      'Notificações push',
      'Sincronização em background',
      'Performance otimizada'
    ],
    cta: 'Quero um app'
  },
  {
    icon: <FaCogs size={32} />,
    title: 'Sistemas Personalizados',
    description:
      'Soluções sob medida para automatizar processos e aumentar sua produtividade em até 200%.',
    features: [
      'CRM e gestão de clientes',
      'Automação de workflows',
      'Integração com APIs',
      'Dashboards inteligentes'
    ],
    cta: 'Quero um sistema'
  },
  {
    icon: <FaChartLine size={32} />,
    title: 'Otimização Técnica',
    description:
      'Diagnóstico e correção de problemas de performance, segurança e experiência do usuário.',
    features: [
      'Auditoria completa',
      'Otimização de carregamento',
      'Melhoria de SEO técnico',
      'Análise de concorrência'
    ],
    cta: 'Otimizar meu projeto'
  },
  {
    icon: <FaHeadset size={32} />,
    title: 'Consultoria Estratégica',
    description:
      'Planejamento tecnológico para alinhar sua infraestrutura com seus objetivos de negócio.',
    features: [
      'Roadmap tecnológico',
      'Arquitetura escalável',
      'Análise de viabilidade',
      'Gestão de equipes'
    ],
    cta: 'Falar com especialista'
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
            Soluções que <HighlightText>impulsionam</HighlightText> seu negócio
          </Title>
          <Description>
            Ofereço <HighlightText>resultados mensuráveis</HighlightText>{' '}
            através de tecnologia de ponta. Cada projeto é otimizado para
            desempenho, conversão e crescimento sustentável.
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
