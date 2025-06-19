import { motion } from 'framer-motion'
import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corDeFundo: '#000000',
  corDeFundo1: '#000035',
  corDeFundo3: 'rgba(0, 25, 60, 0.30)',
  corPrimaria: '#f67828',
  corSecundaria: '#FFFFFF',
  corDeFundo2: '#003366',
  corTercearia: '#335b84',
  corDestaque: 'rgba(246, 120, 40, 0.1)'
}

const EstiloGlobal = createGlobalStyle`
  body {
    background-color: ${cores.corDeFundo};
    font-family: 'Gill Sans', sans-serif;
    color: ${cores.corSecundaria};
    overflow-x: hidden;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }

  /* Animação fadeIn global */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .fade-in {
    animation: fadeIn 1s ease forwards;
  }

  /* Scroll personalizado */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${cores.corPrimaria};
    border-radius: 4px;
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
// Adicione no final do arquivo styles.ts
export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${cores.corPrimaria};
  cursor: pointer;
`

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  color: ${cores.corSecundaria};

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 4px;
    background: ${cores.corPrimaria};
    border-radius: 2px;
  }
`

export const GradientText = styled.span`
  background: linear-gradient(90deg, ${cores.corPrimaria}, #ff9a5a);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 700;
`
