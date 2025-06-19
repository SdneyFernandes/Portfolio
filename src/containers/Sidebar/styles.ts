import styled from 'styled-components'
import { motion } from 'framer-motion'
import { cores } from '../../styles'

interface HeaderContainerProps {
  $isScrolled: boolean
}

interface NavItemProps {
  $active: boolean
}

interface NavLinkProps {
  $active: boolean
}

interface MobileNavLinkProps {
  $active: boolean
}

export const HeaderContainer = styled(motion.header)<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  width: 100%;
  height: 80px;
  background: ${(props) =>
    props.$isScrolled ? 'rgba(10, 10, 30, 0.9)' : 'rgba(10, 10, 30, 0.5)'};
  backdrop-filter: blur(10px);
  border-bottom: ${(props) =>
    props.$isScrolled ? `1px solid ${cores.corPrimaria}20` : 'none'};
  transition: all 0.3s ease;
  box-sizing: border-box;
`

export const Logo = styled(motion.a).attrs({
  whileHover: { scale: 1.05 }
})`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`

export const LogoText = styled.span`
  color: white;
`

export const LogoDot = styled(motion.span).attrs({
  animate: { scale: [1, 1.2, 1] },
  transition: { repeat: Infinity, duration: 2 }
})`
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

export const NavItem = styled(motion.li).attrs({
  whileHover: { scale: 1.05 }
})<NavItemProps>`
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

export const NavLink = styled(motion.a).attrs({
  whileHover: {
    color: cores.corPrimaria,
    textShadow: `0 0 8px ${cores.corPrimaria}80`
  }
})<NavLinkProps>`
  color: ${(props) => (props.$active ? cores.corPrimaria : 'white')};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  position: relative;
  padding: 5px 0;
`

export const MobileMenuButton = styled(motion.button).attrs({
  whileTap: { scale: 0.9 }
})`
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

export const MobileMenu = styled(motion.div).attrs({
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
})`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: rgba(10, 10, 30, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  border-bottom: 1px solid ${cores.corPrimaria}20;
  z-index: 1000;
`

export const MobileNavLink = styled(motion.a).attrs({
  whileHover: {
    backgroundColor: cores.corDestaque,
    paddingLeft: '1.5rem'
  }
})<MobileNavLinkProps>`
  color: ${(props) => (props.$active ? cores.corPrimaria : 'white')};
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.$active ? `${cores.corPrimaria}20` : 'transparent'};
`

export const ScrollIndicator = styled(motion.div).attrs({
  animate: { y: [0, 10, 0] },
  transition: { repeat: Infinity, duration: 2 }
})`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: ${cores.corPrimaria};
  cursor: pointer;
`
