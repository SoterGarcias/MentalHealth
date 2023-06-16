import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { AgendamentoListResults } from '../components/agendamentos/agendamento-list-results.js';
import { AgendamentoListToolbar } from '../components/agendamentos/agendamento-list-toolbar.js';
import { DashboardLayout } from '../components/dashboard-layout.js';
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../lib/firebase.js';

const PageAgendamento = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      try {
        const agendamentosRef = collection(db, 'agendamentos');
        const querySnapshot = await getDocs(agendamentosRef);
        const updatedAgendamentos = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAgendamentos(updatedAgendamentos);
      } catch (error) {
        console.error('Erro ao recuperar os dados:', error);
      }
    };

    fetchAgendamentos();
  }, []);

  return (
    <>
      <Head>
        <title>Agendamentos | Mental Health</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <AgendamentoListToolbar />
          <Box sx={{ mt: 3 }}>
            <AgendamentoListResults agendamentos={agendamentos} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

PageAgendamento.getLayout = (PageAgendamento) => (
  <DashboardLayout>
    {PageAgendamento}
  </DashboardLayout>
);

export default PageAgendamento;

