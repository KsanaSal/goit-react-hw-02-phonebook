import { Formik } from 'formik';
import { Field, Form, Label } from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          lastName: '',
        }}
        onSubmit={async values => {
          console.log(values);
          await new Promise(r => setTimeout(r, 500));
          //   alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Label htmlFor="name">Name</Label>
          <Field
            id="name"
            name="name"
            placeholder="Jane"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <Label htmlFor="lastName">Last Name</Label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
