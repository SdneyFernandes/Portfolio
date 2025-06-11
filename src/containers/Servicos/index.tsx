import { useEffect } from 'react'
import {
  FaGlobe,
  FaShoppingCart,
  FaCogs,
  FaHeadset,
  FaMobileAlt,
  FaChartLine
} from 'react-icons/fa'
import ScrollReveal from 'scrollreveal'
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
  ServicesGrid
} from './styles'

export default function Services() {
  useEffect(() => {
    ScrollReveal().reveal('.services-title', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.services-description', {
      delay: 250,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.service-card', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      interval: 100,
      reset: true
    })
  }, [])

  return (
    <Container id="services">
      <SectionHeader>
        <Title className="services-title">Como Posso Ajudar</Title>
        <Description className="services-description">
          Soluções digitais personalizadas para impulsionar seu negócio.
          Combinando tecnologia e design para criar experiências que geram
          resultados.
        </Description>
      </SectionHeader>

      <ServicesGrid>
        <ServiceCard className="service-card">
          <ServiceIcon>
            <FaGlobe size={32} />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Sites Profissionais</ServiceTitle>
            <ServiceDescription>
              Desenvolvimento de websites modernos e responsivos que representam
              sua marca e convertem visitantes em clientes.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>Design responsivo</FeatureItem>
              <FeatureItem>Otimização SEO</FeatureItem>
              <FeatureItem>Integração com redes sociais</FeatureItem>
              <FeatureItem>Formulários de contato</FeatureItem>
            </ServiceFeatures>
          </ServiceContent>
          <ServiceButton href="#contact">Quero um site</ServiceButton>
        </ServiceCard>

        <ServiceCard className="service-card">
          <ServiceIcon>
            <FaShoppingCart size={32} />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>E-commerce</ServiceTitle>
            <ServiceDescription>
              Lojas virtuais completas com carrinho de compras, pagamentos
              integrados e painel administrativo intuitivo.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>Gateway de pagamentos</FeatureItem>
              <FeatureItem>Gestão de estoque</FeatureItem>
              <FeatureItem>Relatórios de vendas</FeatureItem>
              <FeatureItem>Integração com marketplaces</FeatureItem>
            </ServiceFeatures>
          </ServiceContent>
          <ServiceButton href="#contact">Quero minha loja</ServiceButton>
        </ServiceCard>

        <ServiceCard className="service-card">
          <ServiceIcon>
            <FaMobileAlt size={32} />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Aplicativos Web</ServiceTitle>
            <ServiceDescription>
              Aplicações web progressivas (PWAs) que funcionam como apps
              nativos, com desempenho e experiência premium.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>Funcionamento offline</FeatureItem>
              <FeatureItem>Notificações push</FeatureItem>
              <FeatureItem>Instalação na home screen</FeatureItem>
              <FeatureItem>Atualizações automáticas</FeatureItem>
            </ServiceFeatures>
          </ServiceContent>
          <ServiceButton href="#contact">Quero um app</ServiceButton>
        </ServiceCard>

        <ServiceCard className="service-card">
          <ServiceIcon>
            <FaCogs size={32} />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Sistemas Personalizados</ServiceTitle>
            <ServiceDescription>
              Desenvolvimento de sistemas sob medida para automatizar processos
              e aumentar a eficiência do seu negócio.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>CRM e gestão de clientes</FeatureItem>
              <FeatureItem>Sistemas de agendamento</FeatureItem>
              <FeatureItem>Controle financeiro</FeatureItem>
              <FeatureItem>Relatórios customizados</FeatureItem>
            </ServiceFeatures>
          </ServiceContent>
          <ServiceButton href="#contact">Quero um sistema</ServiceButton>
        </ServiceCard>

        <ServiceCard className="service-card">
          <ServiceIcon>
            <FaChartLine size={32} />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Otimização e Performance</ServiceTitle>
            <ServiceDescription>
              Melhoria de performance, segurança e experiência do usuário em
              aplicações existentes.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>Análise de performance</FeatureItem>
              <FeatureItem>Otimização SEO</FeatureItem>
              <FeatureItem>Migração de tecnologias</FeatureItem>
              <FeatureItem>Refatoração de código</FeatureItem>
            </ServiceFeatures>
          </ServiceContent>
          <ServiceButton href="#contact">Otimizar meu projeto</ServiceButton>
        </ServiceCard>

        <ServiceCard className="service-card">
          <ServiceIcon>
            <FaHeadset size={32} />
          </ServiceIcon>
          <ServiceContent>
            <ServiceTitle>Consultoria Técnica</ServiceTitle>
            <ServiceDescription>
              Acompanhamento especializado para ajudar a definir a melhor
              estratégia tecnológica para seu negócio.
            </ServiceDescription>
            <ServiceFeatures>
              <FeatureItem>Planejamento de projetos</FeatureItem>
              <FeatureItem>Arquitetura de software</FeatureItem>
              <FeatureItem>Análise de viabilidade</FeatureItem>
              <FeatureItem>Orientação tecnológica</FeatureItem>
            </ServiceFeatures>
          </ServiceContent>
          <ServiceButton href="#contact">Falar com especialista</ServiceButton>
        </ServiceCard>
      </ServicesGrid>
    </Container>
  )
}
