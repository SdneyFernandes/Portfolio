import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 20px;
  background-color: ${cores.corDeFundo3};
  color: white;
  max-width: 100%;
`

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 1200px;
  margin: 0 auto 60px;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${cores.corPrimaria};
`

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`

export const ProfessionalSummary = styled.div`
  max-width: 1000px;
  margin: 0 auto 60px;
  padding: 0 20px;
  text-align: center;
  line-height: 1.8;
  font-size: 1.1rem;

  p {
    margin-bottom: 20px;
  }
`

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`

export const SkillsCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(82, 30, 95, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-color: ${cores.corPrimaria};
  }
`

export const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${cores.corPrimaria};
`

export const CategoryIcon = styled.div`
  color: ${cores.corPrimaria};
  display: flex;
  align-items: center;
`

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const SkillCard = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(82, 30, 95, 0.3);
  }
`

export const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${cores.corPrimaria};
  margin-bottom: 15px;
`

export const SkillName = styled.h4`
  font-size: 1rem;
  margin-bottom: 10px;
  text-align: center;
`

export const SkillLevel = styled.div`
  width: 100%;
  height: 8px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
`

export const LevelBar = styled.div<{ width: string }>`
  height: 100%;
  background: ${cores.corPrimaria};
  width: ${(props) => props.width};
  border-radius: 4px;
  transition: width 1s ease;
`
