import { TextField, Button } from '@material-ui/core';
import React from 'react';

const Login = () => {
  return (
    <React.Fragment>
      <form className='login-form'>
        <h2>Welcome Back.</h2>
        <TextField label='Username' required variant='outlined' />
        <TextField
          type='password'
          label='Password'
          required
          variant='outlined'
        />
        <Button type='submit' variant='contained' color='primary'>
          Log In
        </Button>
      </form>
      <p>Don't have an account? Register below.</p>
      <Button variant='contained' color='secondary'>
        Register
      </Button>
    </React.Fragment>
  );
};

export default Login;
