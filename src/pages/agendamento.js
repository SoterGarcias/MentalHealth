import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, TextField, Typography, Snackbar } from '@mui/material';
import { useFormik } from 'formik';
import { collection, addDoc } from 'firebase/firestore/lite';
import { db } from '../lib/firebase';
import Router from 'next/router';
import { DashboardLayout } from '../components/dashboard-layout';

const Agendamento = () => {
  const [pct_Id, setPctId] = useState('');
  const [Id, setPsiId] = useState('');
  const [firstName, setfirstName] = useState('');
  const [psi_firstName, setpsi_firstName] = useState('');
  const [time, setTime] = useState('');
  const [agendamentoSuccess, setAgendamentoSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const changeTime = (e) => {
    console.log(e.target.value);
    setTime(`${e.target.value.split(':')[0]}:00`);
    formik.handleChange(e);
  };

  useEffect(() => {
    // Pega do localStorage os campos para preencher na coleção
    const storedPctId = localStorage.getItem('pct_Id');
    const storedpsi_firstName = localStorage.getItem('psi_firstName');
    const storedPsiId = localStorage.getItem('Id');
    const setfirstName = localStorage.getItem('firstName');

    setPctId(storedPctId || '');
    setPsiId(storedpsi_firstName || '');
    setPctId(storedPsiId || '');
    setPsiId(setfirstName || '');
  }, []);

  const formik = useFormik({
    initialValues: {
      pct_Id: pct_Id,
      paciente: firstName,
      psicologo: psi_firstName,
      psi_Id: Id,
      diaagendamento: '',
      horaagendamento: time,
      duracaoagendamento: 1,
      descricao: '',
      avaliacao: '',
    },
    onSubmit: async (values) => {
      const today = new Date();
      const selectedDate = new Date(values.diaagendamento);
      const selectedTime = new Date(`2000-01-01T${values.horaagendamento}`);

      if (selectedDate.getTime() < today.getTime()) {
        setErrorMessage('Selecione uma data futura');
        return;
      }

      if (!values.diaagendamento) {
        setErrorMessage('Selecione uma data válida');
        return;
      }

      if (!values.horaagendamento) {
        setErrorMessage('Selecione uma hora válida');
        return;
      }

      //if (selectedTime.getTime() < today.getTime()) {
      //  setErrorMessage('Selecione uma hora futura');
      //  return;
      //}

      if (!values.descricao) {
        setErrorMessage('Digite uma descrição válida');
        return;
      }

      try {
        await addDoc(collection(db, 'agendamentos'), values);
        console.log('Agendamento inserido com sucesso');
        setAgendamentoSuccess(true);
        Router.push('/agendamentospage'); // Redirecionamento para a página de agendamento
      } catch (error) {
        console.log('Erro ao inserir Agendamento:', error);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setErrorMessage('');
  };

  return (
    <>
      <Head>
        <title>Solicitação de Agendamento | Mental Health</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Solicitação de Agendamento
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ mb: 3 }}>
              <Typography color="textPrimary" variant="body2">
                Solicitação de um Agendamento <br />
                Colaborador: {JSON.parse(localStorage.getItem('userData')).firstName} <br />
                Psicólogo: {JSON.parse(localStorage.getItem('userData')).psi_firstName} <br />
              </Typography>
            </Box>

            <TextField
              type="date"
              label="Dia do Agendamento"
              locale="pt-br"
              dateFormat="dd/MM/yyyy"
              margin="normal"
              name="diaagendamento"
              InputLabelProps={{
                shrink: true,
              }}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.diaagendamento}
              error={formik.touched.diaagendamento && formik.errors.diaagendamento}
              helperText={formik.touched.diaagendamento && formik.errors.diaagendamento}
            />

            <TextField
              type="time"
              label="Hora Agend."
              margin="normal"
              name="horaagendamento"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 3600, // 1 hora (60 minutos * 60 segundos)
                min: '09:00', // Hora de início mínima
                max: '18:00', // Hora de fim máxima
              }}
              onChange={changeTime}
              value={time}
              error={formik.touched.horaagendamento && formik.errors.horaagendamento}
              helperText={formik.touched.horaagendamento && formik.errors.horaagendamento}
            />

            <TextField
              fullWidth
              label="Duração em Horas"
              type="number"
              margin="normal"
              name="duracaoagendamento"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.duracaoagendamento}
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Breve Descrição"
              margin="normal"
              name="descricao"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.descricao}
              variant="outlined"
              error={formik.touched.descricao && formik.errors.descricao}
              helperText={formik.touched.descricao && formik.errors.descricao}
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
                Realizar Agendamento
              </Button>
            </Box>

            <Snackbar
              open={!!errorMessage}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              message={errorMessage}
            />

            {agendamentoSuccess && (
              <Typography color="textPrimary" variant="body1">
                Agendamento realizado com sucesso!
              </Typography>
            )}
            <Snackbar
              open={agendamentoSuccess}
              autoHideDuration={3000}
              message="Agendamento realizado com sucesso!!!"
            />
          </form>
        </Container>
      </Box>
    </>
  );
};

Agendamento.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Agendamento;
