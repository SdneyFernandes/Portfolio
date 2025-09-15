import { motion } from 'framer-motion'
import { cores } from '../../styles'
import {
  FaReact,
  FaGitAlt,
  FaDocker,
  FaJava,
  FaAws,
  FaCogs,
  FaServer,
  FaDatabase
} from 'react-icons/fa'
import {
  SiSpring,
  SiTypescript,
  SiMysql,
  SiJunit5,
  SiStyledcomponents,
  SiRedux,
  SiNextdotjs,
  SiKubernetes
} from 'react-icons/si'
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
  LevelBar,
  HighlightText,
  ProfessionalSummary
} from './styles'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
}

const skillCategories = [
  {
    title: 'Backend',
    icon: <FaServer size={24} />,
    skills: [
      { icon: <FaJava size={28} />, name: 'Java', level: 90 },
      { icon: <SiSpring size={28} />, name: 'Spring Boot', level: 85 },
      { icon: <SiMysql size={28} />, name: 'MySQL', level: 60 },
      { icon: <SiJunit5 size={28} />, name: 'JUnit', level: 55 },
      { icon: <FaDatabase size={28} />, name: 'MongoDB', level: 20 }
    ]
  },
  {
    title: 'Frontend',
    icon: <FaReact size={24} />,
    skills: [
      { icon: <FaReact size={28} />, name: 'React', level: 85 },
      { icon: <SiRedux size={28} />, name: 'Redux', level: 80 },
      { icon: <SiTypescript size={28} />, name: 'TypeScript', level: 80 },
      {
        icon: <SiStyledcomponents size={28} />,
        name: 'Styled Components',
        level: 75
      },
      { icon: <SiNextdotjs size={28} />, name: 'Next.js', level: 15 }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: <FaCogs size={24} />,
    skills: [
      { icon: <FaDocker size={28} />, name: 'Docker', level: 60 },
      { icon: <SiKubernetes size={28} />, name: 'Kubernetes', level: 15 },
      { icon: <FaAws size={28} />, name: 'AWS', level: 20 },
      { icon: <FaGitAlt size={28} />, name: 'Git', level: 85 }
    ]
  }
]

export default function Skills() {
  return (
    <Container id="skills">
      <SectionHeader>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: '-100px' }}
        >
          <Title>
            Minhas <HighlightText>Expertises Técnicas</HighlightText>
          </Title>
          <Description>
            Habilidades desde o desenvolvimento, até a implantação em produção.
            Habilidades validadas em <HighlightText>projetos</HighlightText> e
            constantemente atualizadas.
          </Description>
        </motion.div>
      </SectionHeader>

      <ProfessionalSummary>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          Como <HighlightText>Full Stack Java/React</HighlightText>,
          especializo-me em criar soluções escaláveis que combinam
          <HighlightText> robustez no backend</HighlightText> com{' '}
          <HighlightText>experiências modernas no frontend</HighlightText>.
          Minha abordagem prioriza código limpo, testes automatizados e
          arquiteturas bem definidas.
        </motion.p>
      </ProfessionalSummary>

      <SkillsContainer
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {skillCategories.map((category) => (
          <SkillsCategory
            as={motion.div}
            variants={fadeIn}
            key={category.title}
            whileHover={{
              y: -10,
              boxShadow: `0 15px 30px ${cores.corPrimaria}20`
            }}
          >
            <CategoryTitle>
              <CategoryIcon>{category.icon}</CategoryIcon>
              {category.title}
            </CategoryTitle>
            <SkillsGrid>
              {category.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  as={motion.div}
                  whileHover={{ scale: 1.03 }}
                >
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <LevelBar
                      width={`${skill.level}%`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 }}
                    />
                  </SkillLevel>
                </SkillCard>
              ))}
            </SkillsGrid>
          </SkillsCategory>
        ))}
      </SkillsContainer>
    </Container>
  )
}
