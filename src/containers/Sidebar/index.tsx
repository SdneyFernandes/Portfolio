import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import {
  HeaderContainer,
  Logo,
  LogoText,
  LogoDot,
  NavLinks,
  NavItem,
  NavLink,
  MobileMenuButton,
  MobileMenu,
  MobileNavLink
} from './styles'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ['about', 'services', 'skills', 'projects', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <Logo href="#about" onClick={() => handleNavClick('about')}>
        <LogoText>Sdney</LogoText>
        <LogoDot>.</LogoDot>
      </Logo>

      <NavLinks>
        <NavItem $active={activeSection === 'about'}>
          <NavLink
            href="#about"
            $active={activeSection === 'about'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('about')
            }}
          >
            Sobre
          </NavLink>
        </NavItem>

        <NavItem $active={activeSection === 'services'}>
          <NavLink
            href="#services"
            $active={activeSection === 'services'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('services')
            }}
          >
            Serviços
          </NavLink>
        </NavItem>
        <NavItem $active={activeSection === 'skills'}>
          <NavLink
            href="#skills"
            $active={activeSection === 'skills'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('skills')
            }}
          >
            Habilidades
          </NavLink>
        </NavItem>
        <NavItem $active={activeSection === 'projects'}>
          <NavLink
            href="#projects"
            $active={activeSection === 'projects'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('projects')
            }}
          >
            Projetos
          </NavLink>
        </NavItem>
        <NavItem $active={activeSection === 'contact'}>
          <NavLink
            href="#contact"
            $active={activeSection === 'contact'}
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Contato
          </NavLink>
        </NavItem>
      </NavLinks>

      <MobileMenuButton
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MobileMenuButton>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLink
              $active={activeSection === 'about'}
              onClick={() => handleNavClick('about')}
            >
              Sobre
            </MobileNavLink>
            <MobileNavLink
              $active={activeSection === 'services'}
              onClick={() => handleNavClick('services')}
            >
              Serviços
            </MobileNavLink>
            <MobileNavLink
              $active={activeSection === 'skills'}
              onClick={() => handleNavClick('skills')}
            >
              Habilidades
            </MobileNavLink>
            <MobileNavLink
              $active={activeSection === 'projects'}
              onClick={() => handleNavClick('projects')}
            >
              Projetos
            </MobileNavLink>
            <MobileNavLink
              $active={activeSection === 'contact'}
              onClick={() => handleNavClick('contact')}
            >
              Contato
            </MobileNavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  )
}
