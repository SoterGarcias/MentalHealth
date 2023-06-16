import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  Snackbar
} from '@mui/material';
import { db } from '../../lib/firebase';
import { collection, doc, setDoc } from 'firebase/firestore/lite';


export default function ProfileDetails(props) {
  const [localStorageData, setLocalStorageData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: '',
    typeUser: ''
  });

  const [successMessageOpen, setSuccessMessageOpen] = useState(false);
  const successMessage = 'Informações salvas com sucesso!'; // Mensagem de sucesso

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setLocalStorageData(parsedUserData);
    }
  }, [localStorage]);

  const handleChange = (event) => {
    setLocalStorageData({
      ...localStorageData,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveChanges = () => {
    const { typeUser, ...dataToSave } = localStorageData;

    const psicologosRef = collection(db, 'psicologos');
    const userRef = doc(psicologosRef, localStorageData.id);

    setDoc(userRef, dataToSave, { merge: true })
      .then(() => {
        localStorage.setItem('userData', JSON.stringify(localStorageData)); // Atualiza as informações no localStorage
        setSuccessMessageOpen(true); // Exibe a mensagem de sucesso
      })
      .catch((error) => {
        console.error('Erro ao salvar as mudanças:', error);
      });
  };

  const handleCloseSnackbar = () => {
    setSuccessMessageOpen(false);
  };
  
  const customer = { typeUser: localStorageData.typeUser };

  return (
    <form autoComplete="off" noValidate {...props}>
      <Card>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', marginLeft: '20px', marginRight: '20px' }}>
          <div>
            <Typography variant="h6" component="div" gutterBottom>
              Perfil
            </Typography>
            <Typography variant="subtitle2" component="div" color="text.secondary">
              As informações podem ser alteradas
            </Typography>
          </div>
          <Typography variant="subtitle2" component="div" color="text.secondary">
            {localStorageData.typeUser === '' ? '' : 'Perfil de Psicólogo'}
          </Typography>
        </div>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                helperText="Por favor, escreva seu primeiro nome"
                label="Nome"
                name="firstName"
                onChange={handleChange}
                required
                value={localStorageData.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Endereço"
                name="address"
                onChange={handleChange}
                required
                value={localStorageData.address}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Cargo"
                name="management"
                onChange={handleChange}
                required
                value={localStorageData.management}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Número de telefone"
                name="phone"
                onChange={handleChange}
                type="number"
                value={localStorageData.phone}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Seções por semana"
                name="sectionsWeek"
                onChange={handleChange}
                required
                value={localStorageData.sectionsWeek}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Email "
                name="email"
                onChange={handleChange}
                required
                value={localStorageData.email}
                variant="outlined"
              >
              </TextField>
            </Grid>
            <Grid item xs={12}>
              {localStorageData.typeUser === '' ? '' : (
                <TextField
                  fullWidth
                  label="Descrição"
                  name="description"
                  onChange={handleChange}
                  required
                  value={localStorageData.description}
                  variant="outlined"
                  sx={{ minHeight: '3rem' }}
                >
                </TextField>
              )}
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSaveChanges}
          >
            Salvar mudanças
          </Button>
        </Box>
      </Card>
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        message={successMessage}
      />
    </form>
  );
};