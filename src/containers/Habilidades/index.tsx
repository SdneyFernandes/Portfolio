// /components/Skills.tsx
import { useEffect, useState } from 'react'
import axios from 'axios'
import { FaReact, FaGitAlt, FaDocker, FaJava, FaCode } from 'react-icons/fa'
import {
  SiSpring,
  SiTypescript,
  SiMysql,
  SiJunit5,
  SiStyledcomponents
} from 'react-icons/si'
import ScrollReveal from 'scrollreveal'
import {
  Container,
  SectionHeader,
  Title,
  Description,
  SkillsContainer,
  SkillsCategory,
  CategoryTitle,
  CategoryIcon,
  SkillsGrid,
  SkillCard,
  SkillIcon,
  SkillName,
  SkillLevel,
  LevelBar
} from './styles'

const LANGUAGE_ICONS: Record<string, JSX.Element> = {
  Java: <FaJava size={28} />,
  TypeScript: <SiTypescript size={28} />,
  JavaScript: <FaReact size={28} />,
  HTML: <FaCode size={28} />,
  CSS: <SiStyledcomponents size={28} />,
  Shell: <FaGitAlt size={28} />,
  Dockerfile: <FaDocker size={28} />,
  Groovy: <SiSpring size={28} />,
  JupyterNotebook: <SiJunit5 size={28} />,
  SQL: <SiMysql size={28} />
}

interface GitHubRepo {
  id: number
  name: string
  languages_url: string
}

export default function Skills() {
  const [languagesData, setLanguagesData] = useState<Record<string, number>>({})

  useEffect(() => {
    ScrollReveal().reveal('.skills-title', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.skills-description', {
      delay: 250,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.skills-category', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      interval: 100,
      reset: true
    })
  }, [])

  useEffect(() => {
    const fetchLanguages = async () => {
      const username = 'SdneyFernandes'

      try {
        const reposRes = await axios.get<GitHubRepo[]>(
          `https://api.github.com/users/${username}/repos`
        )

        const languageTotals: Record<string, number> = {}

        await Promise.all(
          reposRes.data.map(async (repo) => {
            const langRes = await axios.get<Record<string, number>>(
              repo.languages_url
            )

            Object.entries(langRes.data).forEach(([lang, size]) => {
              if (typeof size === 'number') {
                languageTotals[lang] = (languageTotals[lang] || 0) + size
              }
            })
          })
        )

        const total = Object.values(languageTotals).reduce(
          (acc, val) => acc + val,
          0
        )

        const normalized: Record<string, number> = {}
        Object.entries(languageTotals).forEach(([lang, val]) => {
          normalized[lang] = Math.round((val / total) * 100)
        })

        setLanguagesData(normalized)
      } catch (err) {
        console.error('Erro ao buscar dados do GitHub:', err)
      }
    }

    fetchLanguages()
  }, [])

  return (
    <Container id="skills">
      <SectionHeader>
        <Title className="skills-title">Minhas Habilidades</Title>
        <Description className="skills-description">
          Dados reais extraídos da API do GitHub, Dados reais extraídos da API
          do GitHub, Dados reais extraídos da API do GitHub
        </Description>
      </SectionHeader>

      <SkillsContainer>
        <SkillsCategory className="skills-category">
          <CategoryTitle>
            <CategoryIcon>
              <FaCode size={24} />
            </CategoryIcon>
            Linguagens
          </CategoryTitle>
          <SkillsGrid>
            {Object.entries(languagesData).map(([lang, percent]) => (
              <SkillCard key={lang}>
                <SkillIcon>
                  {LANGUAGE_ICONS[lang] || <FaCode size={28} />}
                </SkillIcon>
                <SkillName>{lang}</SkillName>
                <SkillLevel>
                  <LevelBar width={`${percent}%`} />
                </SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsCategory>
      </SkillsContainer>
    </Container>
  )
}
