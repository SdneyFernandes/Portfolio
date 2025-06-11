import { useEffect, useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa'
import ScrollReveal from 'scrollreveal'
import {
  Container,
  ContactWrapper,
  ContactHeader,
  Title,
  Description,
  ContactContent,
  ContactInfo,
  InfoItem,
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
  ErrorMessage
} from './styles'

export default function Contact() {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    ScrollReveal().reveal('.contact-title', {
      delay: 200,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.contact-description', {
      delay: 250,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })

    ScrollReveal().reveal('.contact-info-item', {
      delay: 300,
      distance: '20px',
      origin: 'bottom',
      interval: 100,
      reset: true
    })

    ScrollReveal().reveal('.contact-form', {
      delay: 350,
      distance: '20px',
      origin: 'bottom',
      reset: true
    })
  }, [])

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
          <Title className="contact-title">Vamos Conversar</Title>
          <Description className="contact-description">
            Estou disponível para oportunidades de trabalho e colaborações. Se
            você tem um projeto em mente ou quer bater um papo, sinta-se à
            vontade para entrar em contato.
          </Description>
        </ContactHeader>

        <ContactContent>
          <ContactInfo>
            <InfoItem className="contact-info-item">
              <InfoIcon>
                <FaEnvelope size={20} />
              </InfoIcon>
              <InfoText>
                <h3>Email</h3>
                <p>fsidney987@gmail.com</p>
              </InfoText>
            </InfoItem>

            <InfoItem className="contact-info-item">
              <InfoIcon>
                <FaPhone size={20} />
              </InfoIcon>
              <InfoText>
                <h3>Telefone</h3>
                <p>(+55) 71 9 9203 2184</p>
              </InfoText>
            </InfoItem>

            <InfoItem className="contact-info-item">
              <InfoIcon>
                <FaMapMarkerAlt size={20} />
              </InfoIcon>
              <InfoText>
                <h3>Localização</h3>
                <p>São Paulo, Brasil</p>
              </InfoText>
            </InfoItem>

            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/sdney-da-encarnação-pereira-fernandes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={24} />
              </SocialLink>
              <SocialLink
                href="https://github.com/SdneyFernandes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <Form className="contact-form" ref={form} onSubmit={sendEmail}>
            {isSuccess && (
              <SuccessMessage>
                Mensagem enviada com sucesso! Entrarei em contato em breve.
              </SuccessMessage>
            )}
            {isError && (
              <ErrorMessage>
                Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente
                mais tarde ou entre em contato diretamente pelo email.
              </ErrorMessage>
            )}

            <FormGroup>
              <label htmlFor="name">Nome</label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Seu nome completo"
                required
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
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Assunto</label>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Sobre o que deseja falar?"
                required
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Mensagem</label>
              <TextArea
                id="message"
                name="message"
                placeholder="Descreva sua mensagem aqui..."
                rows={6}
                required
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </SubmitButton>
          </Form>
        </ContactContent>
      </ContactWrapper>
    </Container>
  )
}
