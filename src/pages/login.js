import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import Router from 'next/router';
import UserContext from '../lib/UserContext';
import { UserProvider } from '../lib/UserContext';

const Login = () => {
  const [userData, setUserData] = React.useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
      password: Yup.string().max(255).required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const psicologosRef = collection(db, 'psicologos');
        const q = query(psicologosRef, where('email', '==', values.email));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          const userPassword = userData.password;

          if (values.password === userPassword) {
            console.log('Senha correta. Faça o login do usuário.', userData);
            setUserData(userData);
            
            Router.push('/');
          } else {
            console.log('Senha ou email incorreto.');
            alert('Senha ou email incorreto.')
          }
        } else {
          console.log('Senha ou email incorreto.');
          alert('Senha ou email incorreto.')
        }
      } catch (error) {
        console.error('Error retrieving user data:', error);
        console.log('Erro ao recuperar dados do usuário.', error);
      }
    },
  });

  return (
    <UserContext.Provider value={userData}>
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
              flex: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                textAlign: 'left',
                px: 15,
                py: 10,
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
              px: 3,
            }}
          >
            <Container maxWidth="sm">
              <form onSubmit={formik.handleSubmit}>
                <Box sx={{ my: 3 }}>
                  <Typography color="white" variant="h4">
                    Login
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  sx={{ mb: 3 }}
                />
                <Button color="primary" fullWidth type="submit" variant="contained">
                  Login
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <NextLink href="/register" passHref>
                      <Link
                        color="inherit"
                        sx={{
                          textDecoration: 'none',
                          color: 'white',
                          display: 'block',
                          textAlign: 'center',
                          mt: 2,
                        }}
                      >
                        Ainda não é inscrito? inscrever-se
                      </Link>
                    </NextLink>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Box>
        </div>
      </>
    </UserContext.Provider>
  );
};

export default Login;

