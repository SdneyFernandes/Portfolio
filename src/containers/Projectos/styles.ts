import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  color: white;
  padding: 80px 20px;
  background-color: ${cores.corDeFundo3};
  text-align: center;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${cores.corPrimaria};
`

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 50px;
  line-height: 1.6;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto 50px;
`

export const Card = styled.div`
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  border: 1px solid rgba(82, 30, 95, 0.3);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border-color: ${cores.corPrimaria};
  }
`

export const Icon = styled.div`
  font-size: 2.5rem;
  color: ${cores.corPrimaria};
  margin-bottom: 20px;
`

export const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: ${cores.corPrimaria};
`

export const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
  line-height: 1.6;
`

export const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
`

export const TechItem = styled.li`
  background: rgba(82, 30, 95, 0.2);
  color: ${cores.corPrimaria};
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
`

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 15px;
  background: ${cores.corPrimaria};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(82, 30, 95, 0.8);
    transform: translateY(-2px);
  }
`

export const GithubButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background: transparent;
  color: ${cores.corPrimaria};
  border: 2px solid ${cores.corPrimaria};
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 20px;

  &:hover {
    background: ${cores.corPrimaria};
    color: white;
    transform: translateY(-3px);
  }
`
