import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Atualizar Senha"
          title="Senha"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Senha"
            margin="normal"
            name="Senha"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirme senha"
            margin="normal"
            name="Confirme"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
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
            Atualizar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
