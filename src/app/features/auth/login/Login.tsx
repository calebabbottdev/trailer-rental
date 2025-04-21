import { useState } from 'react';

// MUI
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from 'react-hook-form';

type UserData = {
  email: string;
  password: string;
};

const Login = () => {
  const userDB = [
    { email: 'renter@test.com', password: '123456' },
    { email: 'host@test.com', password: '123456' },
  ];

  const [user, setUser] = useState<UserData | null>(null);

  const [error, setError] = useState<string | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<UserData>();

  const onSubmit = (data: UserData) => {
    const { email, password } = data;
    setUser(null);
    setError(null);

    const matchedUser = userDB.find(
      (user) => email === user.email && password === user.password,
    );

    if (matchedUser) {
      setUser({ email, password });
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container id='login-container' maxWidth='sm'>
      <Grid
        container
        spacing={3}
        component='form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid item xs={12}>
          <Typography variant='h1' align='center'>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='email-address-input'
            label='Email'
            variant='outlined'
            fullWidth
            {...register('email', { required: true })}
            error={errors.email?.type === 'required'}
            helperText={
              errors.email?.type === 'required' && 'Email is required'
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id='password-input'
            label='Password'
            variant='outlined'
            fullWidth
            {...register('password', { required: true })}
            error={errors.password?.type === 'required'}
            helperText={
              errors.password?.type === 'required' && 'Password is required'
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            id='login-button'
            type='submit'
            variant='contained'
            color='secondary'
            fullWidth
          >
            Login
          </Button>
        </Grid>
      </Grid>
      {user?.email && <Box id='credentials'>{user?.email}</Box>}
      {error !== null && <Box id='error'>{error}</Box>}
    </Container>
  );
};

export default Login;
