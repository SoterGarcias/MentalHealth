import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { Box, Button, Container, TextField, Typography, Snackbar } from '@mui/material';
import { useFormik } from 'formik';
import { collection, addDoc, doc, getDocs, query, where, updateDoc, Timestamp, setDoc } from 'firebase/firestore/lite';
import { db } from '../lib/firebase';
import Router from 'next/router';
import { DashboardLayout } from '../components/dashboard-layout';

const Agendamento = () => {
  const [pct_id, setPctId] = useState('');
  const [id, setPsiId] = useState('');
  const [firstName, setfirstName] = useState('');
  const [psi_firstName, setpsi_firstName] = useState('');
  const [time, setTime] = useState('');
  const [agendamentoSuccess, setAgendamentoSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const changeTime = (e) => {
    const selectedHour = e.target.value.split(':')[0];
    const selectedTime = `${selectedHour}:00`;
    setTime(selectedTime);
    console.log('Hora selecionada:', selectedTime);
    formik.setFieldValue('horaagendamento', selectedTime); // Atualiza o valor do campo "horaagendamento" no formik
  };

  useEffect(() => {
    // Pega do localStorage os campos para preencher na coleção
    const userData = JSON.parse(localStorage.getItem('userData'));

    setfirstName(userData.firstName || '');
    setPctId(userData.id || '');
    setPsiId(userData.psi_Id || '');
    setpsi_firstName(userData.psi_firstName || '');

    // Atualiza os valores do formik com os dados do localStorage
    formik.setValues({
      ...formik.values,
      pct_id: userData.id || '',
      paciente: userData.firstName || '',
      psicologo: userData.psi_firstName || '',
      psi_Id: userData.psi_Id || ''
    });
  }, []);

  const formik = useFormik({
    initialValues: {
      pct_id: pct_id,
      paciente: firstName,
      psicologo: psi_firstName,
      diaagendamento: '',
      horaagendamento: time,
      descricao: '',
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

      if (!values.descricao) {
        setErrorMessage('Digite uma descrição válida');
        return;
      }

      try {
        const agendamentosRef = collection(db, 'agendamentos');
        const q = query(agendamentosRef, where('diaagendamento', '==', values.diaagendamento));

        const querySnapshot = await getDocs(q);
        const agendamentos = [];
        querySnapshot.forEach((doc) => {
          agendamentos.push(doc.data());
        });

        console.log('Agendamentos existentes:', agendamentos);

        const conflito = agendamentos.find(
          (agendamento) =>
            (agendamento.psi_Id === values.psi_Id || agendamento.pct_id === values.pct_id) &&
            agendamento.horaagendamento === values.horaagendamento
        );

        if (conflito) {
          setErrorMessage('Já existe um agendamento para o mesmo psicólogo/paciente nessa data e hora');
          return;
        }

        await addDoc(agendamentosRef, values);

        const psicologosRef = collection(db, 'psicologos');
        const pctDoc = doc(psicologosRef, values.pct_id);
        const psiDoc = doc(psicologosRef, values.psi_Id);

        console.log('ID do paciente:', values.pct_id);
        console.log('ID do psicólogo:', values.psi_Id);

        const agendamentoDateTime = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), selectedTime.getHours(), selectedTime.getMinutes());
        const agendamentoTimestamp = Timestamp.fromDate(agendamentoDateTime);

        await setDoc(pctDoc, {
          consultasAgendadas: {
              [`consulta${values.diaagendamento}`]:{
                dataHora: agendamentoTimestamp,
                psicologo:values.psicologo,
                //data: values.diaagendamento,
                //hora:values.horaagendamento,
              }
            },
          }, { merge: true });

        await setDoc(psiDoc, {
          consultasAgendadas: {
            [`consulta${values.diaagendamento}`]:{
              dataHora: agendamentoTimestamp,
              paciente:values.paciente,
              descricao:values.descricao,
              //data: values.diaagendamento,
              //hora:values.horaagendamento,
            }
          },
        }, { merge: true });

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

            {/* <TextField
              fullWidth
              label="Duração em Horas"
              type="number"
              margin="normal"
              name="duracaoagendamento"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.duracaoagendamento}
              variant="outlined"
            /> */}

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
              <Button color="primary" variant="contained" type="submit">
                Solicitar Agendamento
              </Button>
            </Box>
          </form>

          <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={errorMessage !== ''}
            autoHideDuration={6000}
            onClose={handleCloseSnackbar}
            message={errorMessage}
          />
        </Container>
      </Box>
    </>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Agendamento />
    </DashboardLayout>
  );
};

export default Dashboard;
