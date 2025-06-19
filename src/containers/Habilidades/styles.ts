import styled from 'styled-components'
import { cores } from '../../styles'
import { motion } from 'framer-motion'

export const Container = styled.section`
  padding: 50px 20px;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 30%,
        ${cores.corPrimaria}10 0%,
        transparent 30%
      ),
      radial-gradient(
        circle at 80% 70%,
        ${cores.corPrimaria}10 0%,
        transparent 30%
      );
    z-index: 0;
  }
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 20px;
  color: white;
  line-height: 1.2;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
`

export const HighlightText = styled.span`
  color: ${cores.corPrimaria};
  font-weight: 600;
`

export const ProfessionalSummary = styled.div`
  max-width: 1000px;
  margin: 0 auto 60px;
  padding: 0 20px;
  text-align: center;
  line-height: 1.8;
  font-size: 1.1rem;
  position: relative;
  z-index: 1;

  p {
    margin-bottom: 20px;
    color: rgba(255, 255, 255, 0.9);
  }
`

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const SkillsCategory = styled.div`
  background: rgba(10, 10, 30, 0.7);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid ${cores.corTercearia}30;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${cores.corPrimaria}80;
    background: rgba(10, 10, 30, 0.9);
  }
`

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
`

export const CategoryIcon = styled.div`
  color: ${cores.corPrimaria};
  display: flex;
  align-items: center;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 15px;
`

export const SkillCard = styled.div`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 12px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
  border: 1px solid ${cores.corTercearia}20;

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    border-color: ${cores.corPrimaria}50;
  }
`

export const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${cores.corPrimaria};
  margin-bottom: 15px;
`

export const SkillName = styled.h4`
  font-size: 0.95rem;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 500;
`

export const SkillLevel = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
`

export const LevelBar = styled(motion.div)<{ width: string }>`
  height: 100%;
  background: linear-gradient(90deg, ${cores.corPrimaria}, #ff9a5a);
  width: ${(props) => props.width};
  border-radius: 3px;
`
