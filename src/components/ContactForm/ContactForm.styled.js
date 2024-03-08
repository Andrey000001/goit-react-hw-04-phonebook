import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 400px;
  margin: 0 auto;
  padding: 30px 70px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const StyledField = styled(Field)`
  padding: 4px;
  margin-top: 5px;
`;

export const ButtonForm = styled.button`
  max-width: 150px;
  background-color: transparent;
  border: 0.2px solid #ccc;
  border-radius: 2px;
  padding: 5px;
  font-weight: 500;
  &:hover {
    background-color: #b5d7fd;
  }
`;
export const Label = styled.label`
  font-size: 15px;
  font-weight: 700;
`;
