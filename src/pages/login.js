import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'teste@teste.com',
      password: '123'
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: () => {
      Router
        .push('/')
        .catch(console.error);
    }
  });

  return (
    <>
      <Head>
        <title>Login | Mental Health</title>
      </Head>
      <div style={{ display: 'flex' }}>
      <Box
        sx={{
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          height: "100vh",
          backgroundColor: "#009099",
          flex: 1
        }}
      >
        <Typography variant="h1" 
        sx={{ 
          color: "white", 
          textAlign: "left",
          px: 15,
          py: 10,
          }}>
          Mental <br /> Healt
        </Typography>
        <img src="/logo.svg" alt="MentalHealth" />
      </Box>
      <Box
        component="main"
        sx={{
          justifyContent: "flex-end",
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          height: "100vh",
          maxWidth: "400px",
          backgroundColor: "#283342",
          color: "white",
          px: 3,

        }}
      >
        <Container maxWidth="sm">
          {/* <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink> */}
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="white"
                variant="h4"
              >
                Bem vindo de volta! Fico feliz em vê-lo, novamente!
              </Typography>
             
            </Box>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<FacebookIcon />}
                  onClick={() => formik.handleSubmit()}
                  size="small"
                  variant="contained"
                >
                  Login com Facebook
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="error"
                  fullWidth
                  onClick={() => formik.handleSubmit()}
                  size="small"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Login com Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                ou faça o login com endereço de e-mail
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
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
              error={Boolean(formik.touched.password && formik.errors.password)}
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
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <NextLink
                href="/register"
              >
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
