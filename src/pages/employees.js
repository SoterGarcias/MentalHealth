import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/employees/customer-list-results';
import { CustomerListToolbar } from '../components/employees/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { handleSignIn } from '../lib/firebase'; // Importa apenas a função handleSignIn
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../lib/firebase'; // Importa o objeto db do arquivo Firebase

const Page = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const psicologosRef = collection(db, 'psicologos');
        const querySnapshot = await getDocs(psicologosRef);
        const updatedCustomers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setCustomers(updatedCustomers);
      } catch (error) {
        console.error('Erro ao recuperar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Funcionários | Mental Health</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <CustomerListResults customers={customers} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
