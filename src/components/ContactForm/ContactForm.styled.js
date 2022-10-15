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
  min-width: 150px;
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
  border-radius: 4px;
  min-width: 350px;
  min-height: 150px;
  padding: 10px;
`;

export const Label = styled.label`
  font-size: 36px;

  &:not(:first-child) {
    margin-top: 20px;
  }
`;
