import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { IconsContainer, IconLink } from './styles'

export default function Icons() {
  return (
    <IconsContainer>
      <IconLink
        href="https://github.com/SdneyFernandes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        {FaGithub({})}
      </IconLink>

      <IconLink
        href="https://www.linkedin.com/in/sdney-da-encarnação-pereira-fernandes"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        {FaLinkedin({})}
      </IconLink>

      <IconLink href="mailto:fsidney987@gmail.com" aria-label="Email">
        {FaEnvelope({})}
      </IconLink>
    </IconsContainer>
  )
}
