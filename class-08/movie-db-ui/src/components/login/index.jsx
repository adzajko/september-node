import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import { login, useAuthDispatch } from '../context';

const Login = () => {
  const dispatch = useAuthDispatch();
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = async event => {
    event.preventDefault();
    try {
      await login(dispatch, { username, password })
      toast.success('Logged in!', {
        position: 'bottom-right'
      })
      history.push('/home');
    } catch (error) {
      toast.error('Cannot login!', {
        position: 'bottom-right'
      })
    }
  }

  const navigateToRegister = () => {
    history.push('/register')
  }

  return (
    <React.Fragment>
      <section className="login-container">
        <form className='login-form' onSubmit={handleLoginSubmit}>
          <h2>Welcome Back.</h2>
          <TextField
            label='Username'
            required
            variant='outlined'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
          <TextField
            type='password'
            label='Password'
            required
            variant='outlined'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <Button type='submit' variant='contained' color='primary'>
            Log In
          </Button>
        </form>
        <div className="register-container">
          <p className="text-center">Don't have an account? Register below.</p>
          <Button
            onClick={() => navigateToRegister()}
            variant='contained'
            color='secondary'
            className="mx-auto"
            style={{ margin: 'auto', display: 'block' }}
          >
            Register
          </Button>

        </div>
      </section>
    </React.Fragment >
  );
};

export default Login;
