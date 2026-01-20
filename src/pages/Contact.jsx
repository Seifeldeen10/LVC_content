import React, { useState } from 'react';
import axios from '../api/axios';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setEmailError('');
    setMessageError('');

    if (email === '') {
      setEmailError('Email is required');
    }

    if (message === '') {
      setMessageError('Message is required');
    }

    if (email && message) {
      try {
        await axios.post('/contact', { email, message });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>{emailError}</p>
        <label>Message</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        <p>{messageError}</p>
        <button type='submit' className='bg-primary-500 text-primary-600 hover:bg-primary-700 font-bold py-2 px-4 rounded'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
