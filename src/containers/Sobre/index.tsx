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
                  'Especialista em Soluções Escaláveis',
                  1500,
                  'Arquiteto de Microsserviços',
                  1500,
                  'Especialista em Spring Boot',
                  1500,
                  'Desenvolvedor React',
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
              Com <HighlightText>3 anos de experiência</HighlightText>, ajudo
              empresas a transformar desafios técnicos em vantagens
              competitivas. Especializado em:
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
                <HighlightText>Sistemas de alta performance</HighlightText> com
                Java/Spring Boot
              </li>
              <li>
                <HighlightText>Arquitetura escalável</HighlightText> para
                milhares de usuários
              </li>
              <li>
                <HighlightText>Integração contínua</HighlightText> e entrega
                ágil
              </li>
            </DescriptionList>

            <DescriptionText>
              Minha abordagem combina{' '}
              <HighlightText>boas práticas de código</HighlightText> com foco
              nos resultados do negócio.
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
                Vamos conversar →
              </PrimaryButton>
              <SecondaryButton
                href="/CV - correto Sdney Fernandes.pdf"
                download="CV - Sdney Fernandes.pdf"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: `${cores.corPrimaria}20`
                }}
                whileTap={{ scale: 0.95 }}
              >
                Baixar currículo
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
                  3+
                </motion.span>
                Anos de Experiência
              </StatItem>
              <StatItem>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  10+
                </motion.span>
                Projetos Concluídos
              </StatItem>
              <StatItem>
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  100%
                </motion.span>
                Satisfação do Cliente
              </StatItem>
            </StatsContainer>
          </motion.div>
        </AvatarColumn>
      </HeroContent>
    </HeroContainer>
  )
}

export default Sobre
