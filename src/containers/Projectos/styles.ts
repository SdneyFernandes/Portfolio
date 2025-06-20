import styled from 'styled-components'
import { cores } from '../../styles'

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
  margin-bottom: 80px;
  max-width: 1200px;
  margin: 0 auto 80px;
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

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 50px;
  position: relative;
  z-index: 1;

  @media (max-width: 480px) {
    gap: 20px;
    padding: 0 10px;
  }
`

export const Card = styled.div`
  background: rgba(10, 10, 30, 0.7);
  border-radius: 20px;
  padding: 40px 30px;
  border: 1px solid ${cores.corTercearia}30;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 85%;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${cores.corPrimaria}80;
    background: rgba(10, 10, 30, 0.9);
  }
`

export const Icon = styled.div`
  color: ${cores.corPrimaria};
  font-size: 2.5rem;
  margin-bottom: 25px;
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
  font-weight: 600;
  line-height: 1.3;
`

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin: 15px 0;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  flex-grow: 1;
  width: 100%;
`

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  padding: 0;
  margin: 20px 0;
  list-style: none;
`

export const TechItem = styled.li`
  background: rgba(246, 120, 40, 0.1);
  color: ${cores.corPrimaria};
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  border: 1px solid ${cores.corPrimaria}30;
  transition: all 0.3s ease;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: auto;
`

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: ${cores.corPrimaria};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${cores.corPrimaria}e6;
    box-shadow: 0 5px 15px ${cores.corPrimaria}30;
  }
`

export const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: transparent;
  color: ${cores.corPrimaria};
  border: 2px solid ${cores.corPrimaria};
  border-radius: 8px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin: 40px auto 0;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: ${cores.corPrimaria};
    transition: all 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    left: 0;
  }

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
  }
`
