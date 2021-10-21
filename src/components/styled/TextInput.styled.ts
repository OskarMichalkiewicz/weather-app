import styled from 'styled-components'

export const StyledInput = styled.input`
  font-family: inherit;
  width: 30%;
  border: 0;
  border-bottom: 2px solid #fff;
  outline: 0;
  font-size: 1.3rem;
  color: #fff;
  padding: 7px 0;
  background: transparent;

  &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
  }
`
export const FormContainer = styled.div`
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
