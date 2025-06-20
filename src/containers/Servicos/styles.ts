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
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="${encodeURIComponent(
      cores.corPrimaria + '10'
    )}" d="M0,0 L100,0 L100,100 L0,100 Z" /></svg>');
    background-size: cover;
    opacity: 0.1;
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

  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.div`
  background: rgba(10, 10, 30, 0.7);
  border-radius: 20px;
  padding: 40px 30px;
  border: 1px solid ${cores.corTercearia}30;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    border-color: ${cores.corPrimaria}80;
    background: rgba(10, 10, 30, 0.9);
  }
`

export const ServiceIcon = styled.div`
  color: ${cores.corPrimaria};
  font-size: 2.5rem;
  margin-bottom: 25px;
`

export const ServiceContent = styled.div`
  flex-grow: 1;
`

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: white;
  font-weight: 600;
`

export const ServiceDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 25px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
`

export const ServiceFeatures = styled.ul`
  margin: 25px 0;
  padding-left: 0;
  list-style: none;
`

export const FeatureItem = styled.li`
  font-size: 0.95rem;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.8);
  position: relative;
  padding-left: 25px;
  line-height: 1.5;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 8px;
    width: 12px;
    height: 2px;
    background: ${cores.corPrimaria};
  }
`

export const ServiceButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: ${cores.corPrimaria};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: auto;
  align-self: flex-start;
  transition: all 0.3s ease;
  text-align: center;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: ${cores.corPrimaria};
    box-shadow: 0 5px 20px ${cores.corPrimaria}50;
  }

  @media (max-width: 768px) {
    width: 77%;
  }
`
