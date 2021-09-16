import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/auth";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleFormSubmission = async (event) => {
    event.preventDefault()
    try {
      await registerNewUser(username, password);
      toast.success('User created!', {
        position: "bottom-right"
      })
      history.push('/login');
    } catch (error) {
      toast.error('Cannot create user...', {
        position: 'bottom-right'
      })
    }
  }

  const navigateToLogin = () => {
    history.push('/login')
  }

  return <React.Fragment>
    <form className="register-form" onSubmit={handleFormSubmission}>
      <h2>Create an account.</h2>
      <TextField
        label="Username"
        required
        variant="outlined"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <TextField
        label="Password"
        required
        type="password"
        variant="outlined"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">Register</Button>
    </form>
    <div className="register-container">
      <p className="text-center">Already have an account? Login below.</p>
      <Button
        onClick={() => navigateToLogin()}
        variant='contained'
        color='secondary'
        className="mx-auto"
        style={{ margin: 'auto', display: 'block' }}
      >
        Login
      </Button>

    </div>
  </React.Fragment>;
};

export default Register;
