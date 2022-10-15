import styled from 'styled-components';

export const Span = styled.span`
font-size: 36px;
`

export const FilterInput = styled.div`
display: flex;
flex-direction: column;
`

export const Input = styled.input`
color: #010101;
  background-color: #fff;
  padding: 4px;
  margin-top: 10px;
  outline: none;
  border: 2px solid #b1b1b2;
  border-radius: 4px;
  min-height: 30px;
  width: 250px;
  font-size: 24px;

  &:focus {
    outline: none;
    border-color: #80a3f9;
    box-shadow: 0 0 10px #80a3f9;
    background-color: #fff;
  }
`