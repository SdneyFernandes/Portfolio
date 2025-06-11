import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 20px;
  background-color: ${cores.corDeFundo3};
  color: white;
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

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(82, 30, 95, 0.1);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: ${cores.corPrimaria};
  }
`

export const ServiceIcon = styled.div`
  color: ${cores.corPrimaria};
  font-size: 2.5rem;
  margin-bottom: 20px;
`

export const ServiceContent = styled.div`
  flex-grow: 1;
`

export const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: ${cores.corPrimaria};
`

export const ServiceDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`

export const ServiceFeatures = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
`

export const FeatureItem = styled.li`
  font-size: 0.9rem;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;

  &::before {
    content: '•';
    color: ${cores.corPrimaria};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`

export const ServiceButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
  background: ${cores.corPrimaria};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  margin-top: auto;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(82, 30, 95, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(82, 30, 95, 0.4);
  }
`
