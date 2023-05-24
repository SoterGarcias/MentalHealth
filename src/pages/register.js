import React, { useState } from 'react';
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1A237E',
    },
  },
});

const Formulario = () => {
  const [tipoPessoa, setTipoPessoa] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [management, setManagement] = useState('');
  const [phone, setPhone] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [crp, setCrp] = useState('');
  const [description, setDescription] = useState('');
  const [media, setMedia] = useState('');
  const [title, setTitle] = useState('');
  const [totalReviews, setTotalReviews] = useState('');
  const [notaEstrelas, setNotaEstrelas] = useState('');

  const handleChangeTipoPessoa = (event) => {
    setTipoPessoa(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const formData = {
      tipoPessoa,
      name,
      address,
      management,
      phone,
      avatarUrl,
      crp,
      description,
      media,
      title,
      totalReviews,
      notaEstrelas,
    };
  
    if (tipoPessoa === 'paciente') {
      // Requisição POST para cadastrar informações de paciente
      axios.post('http://localhost:3001/pacientes', formData)
        .then((response) => {
          console.log('Informações de paciente cadastradas com sucesso!', response.data);
          // Limpar campos do formulário
          setTipoPessoa('');
          setName('');
          setAddress('');
          setManagement('');
          setPhone('');
          setAvatarUrl('');
        })
        .catch((error) => {
          console.error('Erro ao cadastrar informações de paciente:', error);
        });
    } else if (tipoPessoa === 'psicologo') {
      // Requisição POST para cadastrar informações de psicólogo
      axios.post('http://localhost:3001/psicologos', formData)
        .then((response) => {
          console.log('Informações de psicólogo cadastradas com sucesso!', response.data);
          // Limpar campos do formulário
          setTipoPessoa('');
          setNome('');
          setCrp('');
          setDescription('');
          setMedia('');
          setTitle('');
          setTotalReviews('');
          setNotaEstrelas('');
        })
        .catch((error) => {
          console.error('Erro ao cadastrar informações de psicólogo:', error);
        });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <h1>Cadastro de Usuário</h1>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box p={4} bgcolor="#FFFFFF" borderRadius={8}>
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tipo de Pessoa</FormLabel>
              <RadioGroup row aria-label="tipoPessoa" name="tipoPessoa" value={tipoPessoa} onChange={handleChangeTipoPessoa}>
                <FormControlLabel value="paciente" control={<Radio />} label="Paciente" />
                <FormControlLabel value="psicologo" control={<Radio />} label="Psicólogo" />
              </RadioGroup>
            </FormControl>

            {tipoPessoa === 'paciente' && (
              <>
                <TextField
                  label="Nome do Paciente"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Endereço do Paciente"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Gerenciamento do Paciente"
                  value={management}
                  onChange={(event) => setManagement(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Telefone do Paciente"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="URL do Avatar do Paciente"
                  value={avatarUrl}
                  onChange={(event) => setAvatarUrl(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />
              </>
            )}

            {tipoPessoa === 'psicologo' && (
              <>
                <TextField
                  label="Nome do Psicólogo"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="CRP do Psicólogo"
                  value={crp}
                  onChange={(event) => setCrp(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Descrição do Psicólogo"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Média do Psicólogo"
                  value={media}
                  onChange={(event) => setMedia(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Título do Psicólogo"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Total de Avaliações do Psicólogo"
                  value={totalReviews}
                  onChange={(event) => setTotalReviews(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />

                <TextField
                  label="Nota de Estrelas do Psicólogo"
                  value={notaEstrelas}
                  onChange={(event) => setNotaEstrelas(event.target.value)}
                  fullWidth
                  required
                  margin="normal"
                  size="small"
                />
              </>
            )}

            <Button variant="contained" color="primary" type="submit" fullWidth>
              Enviar
            </Button>
          </form>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Formulario;
