import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Toolbar, Typography } from '@mui/material';

export const AgendamentoListResults = ({ agendamentos }) => {
  const sortedAgendamentos = agendamentos.sort((a, b) => {
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
          <TableCell>Psicólogo(a)</TableCell>
          <TableCell>Agendamento data - hora</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedAgendamentos.map((agendamento) => (
          <TableRow key={agendamento.id}>
            <TableCell>{agendamento.psicologo}</TableCell>
            <TableCell>{agendamento.dataHora}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AgendamentoListResults;
