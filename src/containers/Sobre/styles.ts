import styled from 'styled-components'
import { cores } from '../../styles'
import { motion } from 'framer-motion'

export const HeroContainer = styled.section`
  position: relative;
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, ${cores.corDeFundo3} 0%, #0a0a2a 100%);
  overflow: hidden;
  padding: 0 20px;
`

export const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const AvatarColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 40px;
  }
`

export const GreetingText = styled(motion.p)`
  font-size: 1.2rem;
  color: ${cores.corPrimaria};
  margin-bottom: -15px;
  font-weight: 500;
`

export const NameText = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  color: white;
  line-height: 1.1;
  margin: 0;
  background: linear-gradient(
    90deg,
    ${cores.corPrimaria},
    ${cores.corSecundaria}
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 992px) {
    font-size: 3rem;
  }

  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`

export const TitleAnimation = styled(motion.div)`
  font-size: 2rem;
  font-weight: 600;
  color: ${cores.corSecundaria};
  min-height: 80px;

  @media (max-width: 992px) {
    font-size: 1.8rem;
    min-height: 70px;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
    min-height: 60px;
  }
`

export const DescriptionText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin-top: -10px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`

export const PrimaryButton = styled(motion.a)`
  padding: 15px 35px;
  background: ${cores.corPrimaria};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    box-shadow: 0 5px 15px rgba(82, 30, 95, 0.4);
  }
`

export const SecondaryButton = styled(motion.a)`
  padding: 15px 35px;
  background: transparent;
  color: ${cores.corPrimaria};
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid ${cores.corPrimaria};
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  text-align: center;

  &:hover {
    background: rgba(82, 30, 95, 0.1);
    box-shadow: 0 5px 15px rgba(82, 30, 95, 0.2);
  }
`
