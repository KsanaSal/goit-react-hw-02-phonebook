import styled from 'styled-components';
import { Field as FormikField, Form as FormikForm } from 'formik';

export const Field = styled(FormikField)`
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
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  border: 1px solid #010101;
  border-radius: 8px;
  width: 550px;
  min-height: 150px;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 36px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
width: 150px;
border: 2px solid #b1b1b2;
border-radius: 4px;
background-color: #fff;
font-size: 24px;
padding: 4px;
margin-top: 20px;
box-shadow: 2px 3px 2px rgba(0, 0, 0, 0.1);
&:hover{
    background-color: #0442DC;
    color: #fff;
}
`