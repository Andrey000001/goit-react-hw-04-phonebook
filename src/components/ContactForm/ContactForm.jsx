import { Formik } from 'formik';
import {
  StyledForm,
  ButtonForm,
  Label,
  StyledField,
} from './ContactForm.styled';
export const ContactForm = ({ addUser }) => {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
    addUser(values);
  };

  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
      <StyledForm>
        <Label>
          Name
          <br />
          <StyledField
            type="text"
            name="name"
            pattern="^[A-Za-z\s]+"
            placeholder="Please enter only letters."
            required
          />
        </Label>
        <br />
        <Label>
          Number
          <br />
          <StyledField
            type="tel"
            name="number"
            pattern="[0-9]{8,}"
            required
            placeholder="Please enter 8 digits."
          />
        </Label>
        <br />
        <ButtonForm type="submit">Add contact</ButtonForm>
      </StyledForm>
    </Formik>
  );
};
