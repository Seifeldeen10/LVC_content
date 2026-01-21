import axios from './axios';

async function sendContact(form) {
  try {
    const response = await axios.post('/contact', form);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default sendContact;