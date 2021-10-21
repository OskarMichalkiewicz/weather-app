import styled from 'styled-components'

interface SpanProps {
  vMargin?: number
  hMargin?: number
  fontSize?: string
  fontWeight?: string
  color?: string
}

export const Container = styled.div`
  max-width: 100%;
  padding: 0 20vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`
export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
export const StyledSpan = styled.span<SpanProps>`
  color: ${({ color }) => color};
  margin: ${({ vMargin }) => vMargin || 0}px ${({ hMargin }) => hMargin || 0}px;
  font-size: ${({ fontSize }) => fontSize || '1em'};
  font-weight: ${({ fontWeight }) => fontWeight || 'normal'};
`
