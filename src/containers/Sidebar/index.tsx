import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
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
  MobileNavLink,
  ScrollIndicator
} from './styles'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        },
        { threshold: 0.5 }
      )

      document.querySelectorAll('section').forEach((section) => {
        observer.observe(section)
      })

      return () => observer.disconnect()
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault()
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
      <Logo
        href="#"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LogoText>Sdney</LogoText>
        <LogoDot />
      </Logo>

      <NavLinks>
        {['about', 'services', 'skills', 'projects', 'contact'].map((item) => (
          <NavItem key={item} $active={activeSection === item}>
            <NavLink
              href={`#${item}`}
              $active={activeSection === item}
              onClick={(e: React.MouseEvent) => handleNavClick(item, e)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          </NavItem>
        ))}
      </NavLinks>

      <MobileMenuButton
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Menu"
      >
        {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </MobileMenuButton>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu>
            {['about', 'services', 'skills', 'projects', 'contact'].map(
              (item) => (
                <MobileNavLink
                  key={item}
                  href={`#${item}`}
                  $active={activeSection === item}
                  onClick={(e: React.MouseEvent) => handleNavClick(item, e)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </MobileNavLink>
              )
            )}
          </MobileMenu>
        )}
      </AnimatePresence>

      {!mobileMenuOpen && activeSection === '' && (
        <ScrollIndicator>
          <FaChevronDown size={20} />
        </ScrollIndicator>
      )}
    </HeaderContainer>
  )
}
