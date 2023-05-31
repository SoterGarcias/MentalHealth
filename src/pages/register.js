import Head from 'next/head';
import NextLink from 'next/link';
import { useState } from 'react';
import { Box, Button, Checkbox, Container, Link, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../lib/firebase';
import Router from 'next/router';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      address: '',
      management: '',
      password: '',
      phone: '',
      sectionsWeek: '',
      typeUser: '',
      policy: false,
    },
    onSubmit: async (values) => {
      try {
        await addDoc(collection(db, 'psicologos'), values);
        console.log('Documento inserido com sucesso');
        Router.push('/login'); // Redirecionamento para a página de login
      } catch (error) {
        console.log('Erro ao inserir documento:', error);
      }
    },
  });

  return (
    <>
      <Head>
        <title>Register | Mental Health</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Criar uma nova conta
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use seu e-mail para criar uma nova conta
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Nome"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Endereço"
              margin="normal"
              name="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.address}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Cargo / Onde Trabalha"
              margin="normal"
              name="management"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.management}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Telefone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.phone}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Seções por semana desejada"
              margin="normal"
              name="sectionsWeek"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.sectionsWeek}
              variant="outlined"
            />
            <TextField
              fullWidth
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
              fullWidth
              label="Senha"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1,
              }}
            >
              <Checkbox
                name="policy"
                onChange={formik.handleChange}
                checked={formik.values.policy}
              />
              <Typography color="textSecondary" variant="body2">
                Eu li e aceito os{' '}
                <NextLink href="#" passHref>
                  <Link color="primary" underline="always" variant="subtitle2">
                    Termos and Condições
                  </Link>
                </NextLink>
              </Typography>
              <Checkbox
                name="typeUser"
                onChange={formik.handleChange}
                checked={formik.values.typeUser}
              />
              <Typography color="textSecondary" variant="body2">
                Sou Psicologo
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Inscrever-se agora
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Você já possui conta?{' '}
              <NextLink href="/login" passHref>
                <Link variant="subtitle2" underline="hover">
                  Entrar
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Formulario;
