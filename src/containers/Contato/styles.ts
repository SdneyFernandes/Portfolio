import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 50px 20px;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
        circle at 20% 30%,
        ${cores.corPrimaria}10 0%,
        transparent 30%
      ),
      radial-gradient(
        circle at 80% 70%,
        ${cores.corPrimaria}10 0%,
        transparent 30%
      );
    z-index: 0;
  }
`

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 20px;
  color: white;
  line-height: 1.2;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
`

export const HighlightText = styled.span`
  color: ${cores.corPrimaria};
  font-weight: 600;
`

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  align-items: flex-start;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1.5fr;
  }
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContactCard = styled.div`
  background: rgba(10, 10, 30, 0.7);
  border-radius: 20px;
  padding: 40px;
  border: 1px solid ${cores.corTercearia}30;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  h3 {
    font-size: 1.4rem;
    margin-bottom: 30px;
    color: ${cores.corPrimaria};
    font-weight: 600;
  }
`

export const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${cores.corPrimaria};
  }
`

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

export const InfoIcon = styled.div`
  color: ${cores.corPrimaria};
  padding: 15px;
  background: rgba(246, 120, 40, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`

export const InfoText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
    color: white;
  }

  p {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
  }
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`

export const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);

  &:hover {
    color: ${cores.corPrimaria};
    background: rgba(246, 120, 40, 0.1);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: rgba(10, 10, 30, 0.7);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid ${cores.corTercearia}30;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    font-size: 1rem;
    font-weight: 500;
    color: white;
  }
`

export const Input = styled.input`
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${cores.corPrimaria};
    outline: none;
    box-shadow: 0 0 0 3px ${cores.corPrimaria}30;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

export const TextArea = styled.textarea`
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${cores.corPrimaria};
    outline: none;
    box-shadow: 0 0 0 3px ${cores.corPrimaria}30;
    background: rgba(255, 255, 255, 0.1);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

export const SubmitButton = styled.button`
  padding: 16px 32px;
  background: ${cores.corPrimaria};
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  width: 100%;

  &:hover {
    background: ${cores.corPrimaria}e6;
    box-shadow: 0 5px 20px ${cores.corPrimaria}30;
  }

  &:disabled {
    background: ${cores.corPrimaria}80;
    cursor: not-allowed;
  }
`

export const SuccessMessage = styled.div`
  background-color: rgba(40, 167, 69, 0.2);
  color: #d4edda;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(40, 167, 69, 0.3);
  text-align: center;
`

export const ErrorMessage = styled.div`
  background-color: rgba(220, 53, 69, 0.2);
  color: #f8d7da;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border: 1px solid rgba(220, 53, 69, 0.3);
  text-align: center;
`

export const SectionDivider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 20px 0;
`
