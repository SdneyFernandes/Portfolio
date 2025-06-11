import styled from 'styled-components'
import { motion } from 'framer-motion'
import { cores } from '../../styles'

interface NavLinkProps {
  $active: boolean
}

export const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  height: 80px;
  background: ${(props) =>
    props.$isScrolled ? 'rgba(10, 10, 30, 0.9)' : 'rgba(10, 10, 30, 0.5)'};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: ${(props) =>
    props.$isScrolled ? `1px solid ${cores.corPrimaria}20` : 'none'};
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$isScrolled ? '0 5px 20px rgba(0, 0, 0, 0.2)' : 'none'};

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

export const Logo = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`

export const LogoText = styled.span`
  color: white;
`

export const LogoDot = styled.span`
  color: ${cores.corPrimaria};
`

export const NavLinks = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li<{ $active: boolean }>`
  position: relative;
  padding: 5px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${(props) => (props.$active ? '100%' : '0')};
    height: 2px;
    background: ${cores.corPrimaria};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

export const NavLink = styled(motion.a)<NavLinkProps>`
  color: ${(props) => (props.$active ? cores.corPrimaria : 'white')};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
  padding: 5px 0;

  &:hover {
    color: ${cores.corPrimaria};
  }
`

export const MobileMenuButton = styled(motion.button)`
  display: none;
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 30, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border-bottom: 1px solid ${cores.corPrimaria}20;
  z-index: 1000;
`

export const MobileNavLink = styled.a<{ $active: boolean }>`
  color: ${(props) => (props.$active ? cores.corPrimaria : 'white')};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$active ? `${cores.corPrimaria}20` : 'transparent'};

  &:hover {
    background: ${cores.corPrimaria}20;
    color: ${cores.corPrimaria};
  }
`
