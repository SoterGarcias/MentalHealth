import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { Box, MenuItem, MenuList, Popover, Typography } from '@mui/material';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const [userName, setUserName] = useState('');
  
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      setUserName(userData.firstName);
    }
  }, []);

  const handleSignOut = async () => {
    onClose?.();

    try {
      await authContext.signOut();
      Router.push('/login').catch(console.error);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: '300px' }
      }}
      {...other}
    >
      <Box sx={{ py: 1.5, px: 2 }}>
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          {userName || 'Nome do Usuário'}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          '& > *': {
            '&:first-of-type': {
              borderTopColor: 'divider',
              borderTopStyle: 'solid',
              borderTopWidth: '1px'
            },
            padding: '12px 16px'
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>Log off</MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
