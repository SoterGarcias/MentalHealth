import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const states = [
  {
    value: 'acre',
    label: 'Acre'
  },
  {
    value: 'alagoas',
    label: 'Alagoas'
  },
  {
    value: 'amapa',
    label: 'Amapá'
  },
  {
    value: 'amazonas',
    label: 'Amazonas'
  },
  {
    value: 'bahia',
    label: 'Bahia'
  },
  {
    value: 'ceara',
    label: 'Ceara'
  },
  {
    value: 'distrito federal',
    label: 'Distrito Federal'
  },
  {
    value: 'espirito santo',
    label: 'Espírito Santo'
  },
  {
    value: 'goias',
    label: 'Goiás'
  },
  {
    value: 'maranhao',
    label: 'Maranhão'
  },
  {
    value: 'mato grosso',
    label: 'Mato Grosso'
  },
  {
    value: 'mato grosso do sul',
    label: 'Mato Grosso do Sul'
  },
  {
    value: 'minas gerais',
    label: 'Minas Gerais'
  },
  {
    value: 'para',
    label: 'Pará'
  },
  {
    value: 'paraiba',
    label: 'Paraíba'
  },
  {
    value: 'pernambuco',
    label: 'Pernambuco'
  },
  {
    value: 'piaui',
    label: 'Piauí'
  },
  {
    value: 'rio de janeiro',
    label: 'Rio de Janeiro'
  },
  {
    value: 'rio grande do norte',
    label: 'Rio Grande do norte'
  },
  {
    value: 'rio grande do sul',
    label: 'Rio Grande do Sul'
  },
  {
    value: 'rondonia',
    label: 'Rondônia'
  },
  {
    value: 'roraima',
    label: 'Roraima'
  },
  {
    value: 'santa catarina',
    label: 'Santa Catarina'
  },
  {
    value: 'sao paulo',
    label: 'São Paulo'
  },
  {
    value: 'sergipe',
    label: 'Sergipe'
  },
  {
    value: 'tocantis',
    label: 'Tocantins'
  }
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="As informações podem ser alteradas"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Por favor, escreva seu primeiro nome"
                label="Nome"
                name="Nome"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Sobrenome"
                name="Sobrenome"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número de telefone"
                name="Telefone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Pais"
                name="Pais"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Estado"
                name="estado"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Savar mudanças
          </Button>
        </Box>
      </Card>
    </form>
  );
};
