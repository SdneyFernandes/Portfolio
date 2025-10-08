import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { tsParticles } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'
import Avatar from '../../components/Avatar'
import Icons from '../../components/Icons'
import {
  HeroContainer,
  HeroContent,
  TextColumn,
  AvatarColumn,
  GreetingText,
  NameText,
  TitleAnimation,
  DescriptionText,
  ButtonContainer,
  PrimaryButton,
  SecondaryButton,
  ParticlesBackground,
  HighlightText,
  StatsContainer,
  StatItem,
  DescriptionList
} from './styles'
import { cores } from '../../styles'

const Sobre = () => {
  useEffect(() => {
    const initParticles = async () => {
      try {
        await loadSlim(tsParticles)

        await tsParticles.load('particles-container', {
          background: {
            color: { value: 'transparent' }
          },
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 }
            },
            color: { value: '#f67828' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            links: {
              enable: true,
              distance: 150,
              color: '#335b84',
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              direction: 'none',
              random: true,
              straight: false,
              outModes: 'out'
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'grab' }
            }
          }
        })
      } catch (error) {
        console.error('Erro ao carregar partículas:', error)
      }
    }

    initParticles()
  }, [])

  return (
    <HeroContainer id="about">
      <ParticlesBackground id="particles-container" />
      <HeroContent>
        <TextColumn>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <GreetingText>Olá, Eu sou</GreetingText>
            <NameText>Sdney Fernandes</NameText>
            <TitleAnimation>
              <TypeAnimation
                sequence={[
                  'Desenvolvedor Full Stack Java',
                  1500,
                  'Construtor de Microsserviços com Spring',
                  1500,
                  'Arquiteto de Soluções Serverless na AWS',
                  1500,
                  'Desenvolvedor Full Stack com React.js',
                  1500,
                  'Especialista em APIs RESTful Escaláveis',
                  1500
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
              />
            </TitleAnimation>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <DescriptionText>
              Eu transformo <HighlightText>desafios de negócio</HighlightText>,
              em software de performance. Minha especialidade é entregar:
            </DescriptionText>

            <DescriptionList
              style={{
                color: 'rgba(255, 255, 255, 0.8)',
                margin: '15px 0',
                paddingLeft: '20px',
                lineHeight: '1.8'
              }}
            >
              <li>
                <HighlightText>Microsserviços resilientes</HighlightText> com
                Java/Spring Boot
              </li>
              <li>
                <HighlightText>Soluções serverless na AWS </HighlightText>
                orientadas a eventos
              </li>
              <li>
                <HighlightText>Interfaces reativas</HighlightText> e modernas
                com React.js
              </li>
            </DescriptionList>

            <DescriptionText>
              Minha abordagem combina{' '}
              <HighlightText>código limpo </HighlightText> e resultados
              tangíveis
            </DescriptionText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ButtonContainer>
              <PrimaryButton
                href="https://wa.me/5571992032184"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 5px 15px ${cores.corPrimaria}80`
                }}
                whileTap={{ scale: 0.95 }}
              >
                Entrar em Contato →
              </PrimaryButton>
              <SecondaryButton
                href="/CV - SdneyPereira07_10.pdf"
                download="CV - SdneyPereira07_10.pdf"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `${cores.corPrimaria}20`
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Currículo
              </SecondaryButton>
            </ButtonContainer>
            <Icons />
          </motion.div>
        </TextColumn>

        <AvatarColumn>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              type: 'spring',
              stiffness: 100
            }}
          >
            <Avatar />
            <StatsContainer>
              <StatItem>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  10+
                </motion.span>
                Tecnologias & Ferramentas
              </StatItem>
              <StatItem>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  5+
                </motion.span>
                Projetos no Portfólio
              </StatItem>
              <StatItem>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  400+
                </motion.span>
                Commits no GitHub
              </StatItem>
            </StatsContainer>
          </motion.div>
        </AvatarColumn>
      </HeroContent>
    </HeroContainer>
  )
}

export default Sobre
