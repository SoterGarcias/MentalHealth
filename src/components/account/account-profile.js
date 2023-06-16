import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Snackbar
} from '@mui/material';
import { handleImageUpload } from '../../lib/firebase';

const AccountProfile = (props) => {
  const [avatarUrl, setAvatarUrl] = useState('/static/images/avatars/perfilGeral.png');
  const [defaultAvatar, setDefaultAvatar] = useState('/static/images/avatars/perfilGeral.png');
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [file, setFile] = useState(null); // Adicionada a variável "file" ao estado do componente
  const [successMessageOpen, setSuccessMessageOpen] = useState(false); // Estado para controlar a exibição da mensagem de sucesso
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData) || {
    avatar: '/static/images/avatars/perfilGeral.png',
    city: 'Los Angeles',
    country: 'USA',
    management: 'Senior Developer',
    firstName: 'Katarina Smith',
    timezone: 'GTM-7'
  };

  useEffect(() => {
    const profileImageUrl = localStorage.getItem('profileImageUrl');
    if (profileImageUrl) {
      setAvatarUrl(profileImageUrl);
      setShowSaveButton(true);
    }
  }, [localStorage]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setAvatarUrl(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setFile(file);
      setShowSaveButton(true);

    }
  };

  const handleSaveButtonClick = () => {
    const userId = user.id;
    handleImageUpload(userId, file).then((imageUrl) => {
      localStorage.setItem('profileImageUrl', imageUrl); // Adiciona ou modifica o campo user.profileImageUrl no localStorage
      setSuccessMessageOpen(true);
      window.location.reload(); // Recarrega a página
    });
  };

  const handleSuccessMessageClose = () => {
    setSuccessMessageOpen(false); // Fecha a mensagem de sucesso
  };


  return (
    <Card {...props}>
      <CardContent>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Avatar
            src={file ? URL.createObjectURL(file) : user.profileImageUrl} // Altera o src do Avatar para a imagem carregada ou a imagem de perfil atual
            sx={{
              height: 64,
              mb: 2,
              width: 64
            }}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h5"
          >
            {user.firstName}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          component="label"
          color="primary"
          fullWidth
          variant="text"
        >
          Carregar foto
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            style={{ display: 'none' }}
          />
        </Button>
        {showSaveButton && (
          <Button
            color="primary"
            fullWidth
            variant="text"
            onClick={handleSaveButtonClick}
          >
            Salvar
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
          </Button>
        )}
      </CardActions>
      <Snackbar
        open={successMessageOpen}
        autoHideDuration={3000}
        onClose={handleSuccessMessageClose}
        message="Foto salva com sucesso!"
      />
    </Card>
  );
};

export default AccountProfile;
