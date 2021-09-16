import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sendMail } from '../../services/mailer';

export const Contact = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState(' ');

  const handleSubmit = async event => {
    // console.log(event);
    event.preventDefault();
    try {
      await sendMail({
        name: formName,
        email: formEmail,
        message: formMessage
      });
      toast.success('Thank you!', {
        position: 'bottom-right'
      })
    } catch (error) {
      toast.error('Could not send mail...', {
        position: 'bottom-right'
      })
    } finally {
      setFormName('');
      setFormEmail('');
      setFormMessage('');
    }
  };
  return (
    <React.Fragment>
      <form
        autoComplete='off'
        className='contact-form'
        onSubmit={event => handleSubmit(event)}
      >
        <h2 className='form-header'>Contact Us</h2>
        <TextField
          label='Name'
          variant='outlined'
          fullWidth
          required
          autoCapitalize='true'
          value={formName}
          onChange={event => setFormName(event.target.value)}
        />
        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          required
          type='email'
          value={formEmail}
          onChange={event => setFormEmail(event.target.value)}
        />
        <TextField
          label='Message'
          multiline
          rows={4}
          fullWidth
          variant='outlined'
          value={formMessage}
          onChange={event => setFormMessage(event.target.value)}
        />
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </form>
    </React.Fragment>
  );
};
