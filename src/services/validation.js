import { object, string } from 'zod';

const formSchema = object({
  firstName: string().nonempty({ message: 'Required' }),
  lastName: string().nonempty({ message: 'Required' }),
  email: string().email({ message: 'Invalid email' }),
  message: string().nonempty({ message: 'Required' })
});

const validateForm = (form) => {
  const result = formSchema.safeParse(form);
  if (result.success) {
    return null;
  } else {
    return result.error;
  }
}

export default validateForm;