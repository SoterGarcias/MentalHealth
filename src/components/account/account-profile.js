import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';
import { handleImageUpload } from '../../lib/firebase';

const AccountProfile = (props) => {
  const [avatar, setAvatar] = useState('/static/images/avatars/perfilGeral.png');
  const [defaultAvatar, setDefaultAvatar] = useState('/static/images/avatars/perfilGeral.png');
  const [showSaveButton, setShowSaveButton] = useState(false);
  const [file, setFile] = useState(null); // Adicionada a variável "file" ao estado do componente
  const userData = localStorage.getItem('userData');
  const user = JSON.parse(userData) ?? {
    avatar: '/static/images/avatars/perfilGeral.png',
    city: 'Los Angeles',
    country: 'USA',
    management: 'Senior Developer',
    firstName: 'Katarina Smith',
    timezone: 'GTM-7'
  };

  useEffect(() => {
    const profileImageUrl = localStorage.getItem('profileImageUrl');
    setAvatar(profileImageUrl && typeof profileImageUrl === 'string' ? profileImageUrl : defaultAvatar);
    setShowSaveButton(profileImageUrl !== null);
  }, []);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setAvatar(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setFile(file);
      setShowSaveButton(true);

    }
  };

  const handleSaveButtonClick = () => {
    const userId = user.id; // Substitua "userId" pelo nome da chave do usuário no localStorage
    handleImageUpload(userId, file); // Chama a função para fazer o upload da imagem para o Firebase
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
            src={avatar}
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
            {user?.firstName}
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
    </Card>
  );
};

export default AccountProfile;