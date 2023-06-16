import { Box, Button, Card, CardContent, Divider, useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import React, { useEffect } from 'react';
import Link from 'next/link';

export const Sales = (props) => {
  const theme = useTheme();
  const [dados, setDados] = React.useState('');
  const [psiUrl, setPsiUrl] = React.useState('');
  const [psiFirstName, setPsiFirstName] = React.useState('');
  const [psiId, setPsiId] = React.useState('');

  useEffect(() => {
    const userDataLocalStorage = localStorage.getItem('userData');
    if (userDataLocalStorage) {
      const userData = JSON.parse(userDataLocalStorage);
      setPsiUrl(userData.psi_Url);
      setPsiFirstName(userData.psi_firstName);
      setPsiId(userData.psi_Id);
    }
  }, [localStorage]);


  return (
    <Card {...props}
      sx={{ width: '456px', height: '140px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '47px',
          backgroundColor: theme.palette.primary.main,
          px: 2,
        }}
      >
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>
          Seu Psicólogo
        </Box>
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>
          <Link href={`/psicologos/${psiId}`} passHref>
            <Button component="a" style={{ textDecoration: 'none', color: 'white' }}>
              Ir para o perfil dele(a)
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px 10px 10px 10px', width: '100%' }}>
        <img src={psiUrl} alt="Imagem do psicólogo" style={{ width: '80px', height: '80px', borderRadius: '50%', marginRight: '10px', objectFit: 'cover', }} />
        <span style={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{psiFirstName}</span>
      </Box>
      <CardContent />
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 0,
        }}
      >
        <Button color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small">
          Overview
        </Button>
      </Box>
    </Card>
  );
};
