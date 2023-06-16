import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../lib/firebase';

export const TrafficByDevice = (props) => {
  const theme = useTheme();
  const [agendamentos, setAgendamentos] = useState([]);
  const [userData, setUserData] = useState(null); // Adicione o estado para armazenar o userData

  useEffect(() => {
    const obterAgendamentos = async () => {
      try {
        const agendamentosCollection = collection(db, 'agendamentos');
        const snapshot = await getDocs(agendamentosCollection);
        const agendamentosDoFirestore = snapshot.docs.map((doc) => doc.data());

        setAgendamentos(agendamentosDoFirestore);
      } catch (error) {
        console.log('Erro ao obter agendamentos:', error);
      }
    };

    const obterUserData = () => {
      // Obtenha o userData do LocalStore
      const userDataFromLocalStorage = localStorage.getItem('userData');
      if (userDataFromLocalStorage) {
        const userDataParsed = JSON.parse(userDataFromLocalStorage);
        setUserData(userDataParsed);
      }
    };

    obterAgendamentos();
    obterUserData();
  }, []);

  return (
    <Card {...props} sx={{ width: '456px', height: '140px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '47px', backgroundColor: theme.palette.primary.main, px: 2 }}>
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>Próxima consulta: </Box>
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>Entrar na consulta</Box>
      </Box>
      <Box sx={{ my: -1 }}>
        <CardContent>
          {agendamentos.map((agendamento, index) => {
            if (userData && agendamento.pct_id === userData.id) {
              return (
                <Box key={agendamento.id} sx={{ my: 1 }}>
                  Psicólogo(a): {agendamento.psicologo} <br />
                  Data: {agendamento.diaagendamento} Hora: {agendamento.horaagendamento}
                </Box>
              );
            }
            return null;
          })}
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small">
          Overview
        </Button>
      </Box>
    </Card>
  );
};
