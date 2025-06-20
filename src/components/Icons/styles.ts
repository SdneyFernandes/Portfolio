import styled from 'styled-components'
import { cores } from '../../styles'

export const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 25%;
  margin-top: 18px;

  @media (max-width: 768px) {
    margin-left: 95px;
  }
`

export const IconLink = styled.a`
  color: ${cores.corSecundaria};
  font-size: 1.7rem;
  cursor: pointer;
  transition:
    color 0.3s,
    transform 0.3s;

  &:hover {
    color: ${cores.corPrimaria};
    transform: scale(1.2);
  }
`
