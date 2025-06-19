import { useRef, useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp
} from 'react-icons/fa'
import {
  Container,
  ContactWrapper,
  ContactHeader,
  Title,
  Description,
  ContactContent,
  ContactInfo,
  InfoIcon,
  InfoText,
  Form,
  FormGroup,
  Input,
  TextArea,
  SubmitButton,
  SocialLinks,
  SocialLink,
  SuccessMessage,
  ErrorMessage,
  HighlightText,
  ContactCard,
  ContactMethod,
  SectionDivider
} from './styles'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 }
}

const contactMethods = [
  {
    icon: <FaEnvelope size={20} />,
    title: 'Email',
    content: 'fsidney987@gmail.com',
    action: 'mailto:fsidney987@gmail.com'
  },
  {
    icon: <FaWhatsapp size={20} />,
    title: 'WhatsApp',
    content: '(+55) 71 9 9203-2184',
    action: 'https://wa.me/5571992032184'
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    title: 'Localização',
    content: 'São Paulo, Brasil',
    action: 'https://goo.gl/maps/XYZ'
  }
]

const socialLinks = [
  {
    icon: <FaLinkedin size={24} />,
    url: 'https://www.linkedin.com/in/sdney-da-encarnação-pereira-fernandes',
    label: 'LinkedIn'
  },
  {
    icon: <FaGithub size={24} />,
    url: 'https://github.com/SdneyFernandes',
    label: 'GitHub'
  }
]

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.current) return

    setIsLoading(true)
    setIsSuccess(false)
    setIsError(false)

    emailjs
      .sendForm(
        'service_t8m9hzv',
        'template_6tjysvk',
        form.current,
        'n9DAefj9EC_n9LHKu'
      )
      .then(
        (result) => {
          console.log(result.text)
          setIsSuccess(true)
          form.current?.reset()
        },
        (error) => {
          console.log(error.text)
          setIsError(true)
        }
      )
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <Container id="contact">
      <ContactWrapper>
        <ContactHeader>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: '-100px' }}
          >
            <Title>
              Vamos <HighlightText>Trabalhar Juntos?</HighlightText>
            </Title>
            <Description>
              Estou disponível para novas oportunidades e projetos desafiadores.
              Se você precisa de um desenvolvedor fullstack ou quer discutir uma
              ideia, <HighlightText>entre em contato</HighlightText> - respondo
              dentro de 24 horas.
            </Description>
          </motion.div>
        </ContactHeader>

        <ContactContent>
          <ContactInfo
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            <ContactCard as={motion.div} whileHover={{ y: -5 }}>
              <h3>Formas de Contato</h3>
              {contactMethods.map((method, index) => (
                <ContactMethod
                  key={index}
                  href={method.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  as={motion.a}
                  whileHover={{ x: 5 }}
                >
                  <InfoIcon>{method.icon}</InfoIcon>
                  <InfoText>
                    <h4>{method.title}</h4>
                    <p>{method.content}</p>
                  </InfoText>
                </ContactMethod>
              ))}

              <SectionDivider />

              <h3 style={{ marginTop: '30px' }}>Redes Sociais</h3>
              <SocialLinks>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    as={motion.a}
                    whileHover={{ y: -3, scale: 1.1 }}
                  >
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialLinks>
            </ContactCard>
          </ContactInfo>

          <Form
            ref={form}
            onSubmit={sendEmail}
            as={motion.form}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
          >
            {isSuccess && (
              <SuccessMessage
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Mensagem enviada com sucesso! Responderei em até 24 horas.
              </SuccessMessage>
            )}
            {isError && (
              <ErrorMessage
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Ocorreu um erro. Você pode me contatar diretamente por email ou
                WhatsApp.
              </ErrorMessage>
            )}

            <FormGroup>
              <label htmlFor="name">Seu Nome</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Como posso te chamar?"
                required
                as={motion.input}
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email</label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                required
                as={motion.input}
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Assunto</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sobre o que deseja conversar?"
                required
                as={motion.input}
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Mensagem</label>
              <TextArea
                id="message"
                name="message"
                placeholder="Descreva sua proposta ou dúvida..."
                rows={6}
                required
                as={motion.textarea}
                whileFocus={{ scale: 1.02 }}
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              disabled={isLoading}
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </SubmitButton>
          </Form>
        </ContactContent>
      </ContactWrapper>
    </Container>
  )
}
