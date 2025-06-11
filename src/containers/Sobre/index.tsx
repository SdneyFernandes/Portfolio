import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
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
  ParticlesBackground
} from './styles'

const Sobre = () => {
  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '0'
    document.getElementById('particles-container')?.appendChild(canvas)

    return () => {
      document.getElementById('particles-container')?.removeChild(canvas)
    }
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
                  'Desenvolvedor Full Stack',
                  1500,
                  'Especialista Java',
                  1500,
                  'Aprendiz constante de tecnologia',
                  1500,
                  'Entusiasta de soluções criativas',
                  1500,
                  'Estudante de boas práticas',
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
              Minha jornada na programação começou com a curiosidade de entender
              como os sistemas que usamos no dia a dia funcionam por trás das
              telas. Apartir dai aprendi a transformar linhas de código em
              soluções reais. Me fascino nessa combinação única de lógica e
              criatividade, e a constante oportunidade de aprender algo novo.
            </DescriptionText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <ButtonContainer>
              <PrimaryButton
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Vamos conversar
              </PrimaryButton>
              <SecondaryButton
                href="/CV - correto Sdney Fernandes.pdf"
                download="CV - Sdney Fernandes.pdf"
                whileHover={{ scale: 1.05 }}
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
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Avatar />
          </motion.div>
        </AvatarColumn>
      </HeroContent>
    </HeroContainer>
  )
}

export default Sobre
