import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const LatestProducts = (props) => {
  const theme = useTheme();

  return (
    <Card {...props} sx={{ width: '456px', height: '140px' }}>
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
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>Chat</Box>
        <Box sx={{ color: 'white', fontWeight: 'bold' }}>Ir para o chat</Box>
      </Box>
      <CardContent />
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small">
          Overview
        </Button>
      </Box>
    </Card>
  );
};

