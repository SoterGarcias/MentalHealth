import React, { useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { handleSignIn } from '../lib/firebase';
import { db } from '../firebase';
import { collection } from 'firebase/firestore';


const Login = () => {
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup.string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values) => {
      setFormSubmitted(true);
      await handleSignIn(values.email, values.password);
    }
  });

  const handleSignIn = async (email, password) => {
    try {
      const psicologosRef = db.collection('psicologos');
      const snapshot = await psicologosRef.where('email', '==', email).get();
  
      if (!snapshot.empty) {
        const userData = snapshot.docs[0].data();
        const userPassword = userData.password;
        console.log('Senha do usuário encontrado no Firebase:', userPassword);
        setPassword(userPassword);
  
        // Verifique se a senha digitada corresponde à senha do usuário
        if (password === userPassword) {
          // Senha correta, faça o login do usuário
          console.log('Senha correta. Faça o login do usuário.');
        } else {
          // Senha incorreta, exiba uma mensagem de erro
          console.log('Senha incorreta. Exiba uma mensagem de erro.');
        }
      } else {
        setPassword('');
        // Usuário não encontrado, exiba uma mensagem de erro
        console.log('Usuário não encontrado. Exiba uma mensagem de erro.');
      }
    } catch (error) {
      console.error('Error retrieving user data:', error);
      // Exiba uma mensagem de erro genérica
      console.log('Erro ao recuperar dados do usuário.', error);
    }
  };

  return (
    <>
      <Head>
        <title>Login | Mental Health</title>
      </Head>
      <div style={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            height: '100vh',
            backgroundColor: '#009099',
            flex: 1
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: 'white',
              textAlign: 'left',
              px: 15,
              py: 10
            }}
          >
            Mental <br /> Health
          </Typography>
          <img src="/logo.svg" alt="logo" />
        </Box>
        <Box
          component="main"
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%',
            height: '100vh',
            maxWidth: '400px',
            backgroundColor: '#283342',
            color: 'white',
            px: 3
          }}
        >
          <Container maxWidth="sm">
            <form onSubmit={formik.handleSubmit}>
              <Box sx={{ my: 3 }}>
                <Typography color="white" variant="h4">
                  Bem vindo de volta! Fico feliz em vê-lo, novamente!
                </Typography>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Button
                    color="info"
                    fullWidth
                    size="small"
                    variant="contained"
                  >
                    Login com Facebook
                  </Button>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Button
                    color="error"
                    fullWidth
                    size="small"
                    variant="contained"
                  >
                    Login com Google
                  </Button>
                </Grid>
              </Grid>
              <Box sx={{ pb: 1, pt: 3 }}>
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                >
                  ou faça o login com endereço de e-mail
                </Typography>
              </Box>
              <TextField
                inputProps={{ style: { color: 'white' } }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.email}
                variant="outlined"
              />
              <TextField
                inputProps={{ style: { color: 'white' } }}
                error={formik.touched.password && Boolean(formik.errors.password)}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="Password"
                margin="normal"
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="password"
                value={formik.values.password}
                variant="outlined"
              />
              <Box sx={{ py: 2 }}>
                <Button
                  color="primary"
                  disabled={formik.isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Sign In Now
                </Button>
              </Box>
              <Typography color="textSecondary" variant="body2">
                Don&apos;t have an account?
                {' '}
                <NextLink href="/register">
                  <Link
                    to="/register"
                    variant="subtitle2"
                    underline="hover"
                    sx={{
                      cursor: 'pointer'
                    }}
                  >
                    Sign Up
                  </Link>
                </NextLink>
              </Typography>
            </form>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default Login;
