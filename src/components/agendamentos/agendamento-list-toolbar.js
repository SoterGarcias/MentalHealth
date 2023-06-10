import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';

export const AgendamentoListToolbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleFilter = () => {
    // Realizar ação com o termo de pesquisa (searchTerm)
    console.log('Realizando ação com o termo de pesquisa:', searchTerm);
    // Aqui você pode adicionar sua lógica personalizada para lidar com o termo de pesquisa
    // Por exemplo, chamar uma função de busca, filtrar os resultados, etc.
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextField
          label="Pesquisar"
          onChange={handleSearch}
        // Outras propriedades do TextField, como valor inicial, estilos, etc.
        />
        <Button variant="outlined" onClick={handleFilter}>
          Filtrar
        </Button>
      </Box>
    </Box>
  );
};

export default AgendamentoListToolbar;

