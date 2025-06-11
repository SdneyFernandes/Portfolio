import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  padding: 80px 20px;
  background-color: ${cores.corDeFundo3};
  color: white;
`

export const ContactWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: ${cores.corPrimaria};
`

export const Description = styled.p`
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
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
  gap: 30px;
`

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(82, 30, 95, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-color: ${cores.corPrimaria};
  }
`

export const InfoIcon = styled.div`
  color: ${cores.corPrimaria};
  padding: 12px;
  background: rgba(82, 30, 95, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InfoText = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 8px;
    color: ${cores.corPrimaria};
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
  padding-left: 25px;
`

export const SocialLink = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${cores.corPrimaria};
    transform: translateY(-3px);
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: rgba(0, 25, 60, 0.85);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 1rem;
    font-weight: 500;
    color: white;
  }
`

export const Input = styled.input`
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${cores.corPrimaria};
    outline: none;
    box-shadow: 0 0 0 3px rgba(82, 30, 95, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

export const TextArea = styled.textarea`
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${cores.corPrimaria};
    outline: none;
    box-shadow: 0 0 0 3px rgba(82, 30, 95, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`

export const SubmitButton = styled.button`
  padding: 15px 30px;
  background: ${cores.corPrimaria};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: rgba(82, 30, 95, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(82, 30, 95, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`
export const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 1px solid #c3e6cb;
`

export const ErrorMessage = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 1px solid #f5c6cb;
`
