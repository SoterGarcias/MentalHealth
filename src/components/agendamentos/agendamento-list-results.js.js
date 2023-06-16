import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { format, addDays } from 'date-fns';

export const AgendamentoListResults = ({ agendamentos }) => {
  const localStorageData = localStorage.getItem("userData");
  const localStorageId = localStorageData ? JSON.parse(localStorageData).id : null;
  const filteredAgendamentos = agendamentos.filter(
    (agendamento) => agendamento.pct_id === localStorageId
  );

  const sortedAgendamentos = filteredAgendamentos.sort((a, b) => {
    // Ordena por dia do agendamento
    if (a.diaagendamento < b.diaagendamento) {
      return -1;
    } else if (a.diaagendamento > b.diaagendamento) {
      return 1;
    } else {
      // Se o dia for o mesmo, ordena por hora do agendamento
      if (a.horaagendamento < b.horaagendamento) {
        return -1;
      } else if (a.horaagendamento > b.horaagendamento) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Data Consulta</TableCell>
          <TableCell>Horas</TableCell>
          <TableCell>Psicólogo(a)</TableCell>
          <TableCell>Obs:</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedAgendamentos.map((agendamento) => {
          const adjustedDate = addDays(new Date(agendamento.diaagendamento), 1);
          const formattedDate = format(adjustedDate, 'dd/MM/yyyy');
          return (
            <TableRow key={agendamento.id}>
              <TableCell>{formattedDate}</TableCell>
              <TableCell>{agendamento.horaagendamento}</TableCell>
              <TableCell>{agendamento.psicologo}</TableCell>
              <TableCell>{agendamento.descricao}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default AgendamentoListResults;