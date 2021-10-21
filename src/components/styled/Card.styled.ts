import styled from 'styled-components'

interface CardProps {
  compact?: boolean
  margin?: string
}

export const Card = styled.div<CardProps>`
  font-size: 20px;
  padding: 0.5em 0;
  margin: ${({ compact, margin }) => (compact ? margin : 0)};
  max-width: 30%;
`
export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vh 0;
`
