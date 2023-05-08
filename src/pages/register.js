import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';

import {
  Box,
  Button,
  Checkbox,
  Container,
  Link,
  TextField,
  Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formik, setFormik] = useState({
    email: '',
    firstName: '',
    address: '',
    management: '',
    password: '',
    phone: '',
    sectionsWeek: '',
    typeUser: '',
    policy: true
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001/usuarios';
    axios
      .post(url, formik)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(`Ops! Deu erro no cadastro de usuário ` + error);
      });
  };

  return (
    <>
      <Head>
        <title>
          Register | Mental Health
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
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
                color="textPrimary"
                variant="h4"
              >
                Criar uma nova conta
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Use seu e-mail para criar uma nova conta
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.firstName && formik.errors.firstName}
              label="Nome"
              margin="normal"
              name="Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.address && formik.errors.address)}
              fullWidth
              helperText={formik.address && formik.errors.address}
              label="Endereço"
              margin="normal"
              name="address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.management && formik.errors.management)}
              fullWidth
              helperText={formik.management && formik.errors.management}
              label="Cargo / Onde Trabalha"
              margin="normal"
              name="management"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.phone && formik.errors.phone)}
              fullWidth
              helperText={formik.phone && formik.errors.phone}
              label="Telefone"
              margin="normal"
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.sectionsWeek && formik.errors.sectionsWeek)}
              fullWidth
              helperText={formik.sectionsWeek && formik.errors.sectionsWeek}
              label="Seções por semana desejada"
              margin="normal"
              name="sectionsWeek"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.email && formik.errors.email)}
              fullWidth
              helperText={formik.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.password && formik.errors.password)}
              fullWidth
              helperText={formik.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                //checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                Eu li e aceito os
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Termos and Condições
                  </Link>
                </NextLink>
              </Typography>
              <Checkbox
                //checked={formik.values.policy}
                name="typeUser"
                onChange={formik.typeUser}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
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
                onClick={() => console.log(formik.values)}
              >
                Inscrevasse agora
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Você já possui conta?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Entrar
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
