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
  Typography
} from '@mui/material';
import { db } from '../../lib/firebase';
import { query, where } from 'firebase/firestore/lite';



export const AccountProfileDetails = (props) => {
  const [localStorageData, setLocalStorageData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    state: '',
    country: '',
    typeUser: ''
  });

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setLocalStorageData(parsedUserData);
    }
  }, []);

  const handleChange = (event) => {
    setLocalStorageData({
      ...localStorageData,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveChanges = () => {
    const { typeUser, ...dataToSave } = localStorageData;

  firestore
    .collection('psicologos')
    .doc(localStorageData.id) // Substitua 'id-do-psicologo' pelo ID do documento do psicólogo que você deseja atualizar
    .get()
    .then((doc) => {
      if (doc.exists) {
        const existingData = doc.data();
        const newData = { ...existingData, ...dataToSave };

        firestore
          .collection('psicologos')
          .doc('id-do-psicologo') // Substitua 'id-do-psicologo' pelo ID do documento do psicólogo que você deseja atualizar
          .set(newData)
          .then(() => {
            console.log('Mudanças salvas com sucesso!');
          })
          .catch((error) => {
            console.error('Erro ao salvar as mudanças:', error);
          });
      } else {
        console.log('Documento do psicólogo não encontrado!');
      }
    })
    .catch((error) => {
      console.error('Erro ao obter o documento do psicólogo:', error);
    });
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
    </form>
  );
};