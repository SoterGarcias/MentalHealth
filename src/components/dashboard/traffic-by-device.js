import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '../../lib/firebase';

export const TrafficByDevice = (props) => {
  const theme = useTheme();
  const [agendamentos, setAgendamentos] = useState([]);

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

    obterAgendamentos();
  }, []);

  return (
    <Card {...props} sx={{ width: '456px', height: '140px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '47px', backgroundColor: theme.palette.primary.main, px: 2 }}>
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>Próxima consulta: </Box>
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>Entrar na consulta</Box>
      </Box>
      <Box sx={{ my: -2 }}> {/* Mover a abertura da tag para cá */}
        <CardContent>
          {agendamentos.map((agendamento, index) => {
            if (index === 0) {
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
