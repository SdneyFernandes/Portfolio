import styled from 'styled-components'
import { cores } from '../../styles'
import { motion } from 'framer-motion'

export const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  height: 110vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow: hidden;
  border-bottom: 1px solid ${cores.corTercearia}30;
  box-shadow: inset 0 -1px 0 ${cores.corTercearia}20;

  @media (max-width: 768px) {
    height: 200vh;
  }
`

export const ParticlesBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.3;
  pointer-events: none;
`

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 1;
  align-items: center;
`

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  justify-content: center;
  text-align: left;
  width: 150%;

  @media (max-width: 768px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`

export const AvatarColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    order: -1;
    margin-bottom: 20px;
  }
`

export const GreetingText = styled(motion.p)`
  font-size: 1.1rem;
  color: ${cores.corPrimaria};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: -10px;
`

export const NameText = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
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
`

export const TitleAnimation = styled(motion.div)`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: ${cores.corSecundaria};
  min-height: 60px;
  margin-bottom: 1px;
  line-height: 1.4;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }

  span {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.95),
      rgba(255, 255, 255, 0.6)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`

export const DescriptionText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const HighlightText = styled.span`
  color: ${cores.corPrimaria};
  font-weight: 600;
`

export const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 2px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 8px;
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
  cursor: pointer;
  display: inline-block;
  text-align: center;
  transition: background 0.3s ease;
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
  display: inline-block;
  text-align: center;
  transition: background 0.3s ease;
`

export const StatsContainer = styled.div`
  display: flex;
  gap: 30px;
  margin: 10px 0;
  flex-wrap: wrap;
  justify-content: center;
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.95rem;

  span {
    font-size: 1.9rem;
    font-weight: 700;
    color: ${cores.corPrimaria};
  }
`

export const DescriptionList = styled.ul`
  padding-left: 20px;

  @media (max-width: 768px) {
    list-style: none;
    padding-left: 0;
  }
`
