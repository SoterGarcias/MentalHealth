import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

export const TotalCustomers = (props) => (
  <Card {...props}>
     <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: '1 0 calc(100% - 10px)', position: 'relative' }}>
            <img src="/static/images/dashboard/Chat.jpg" alt="Chat" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30px', backgroundColor: 'rgba(242, 234, 171, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: '#1D242E', fontWeight: 'bold' }}>Chat</Typography>
          </Box>
        </Box>
  </Card>
);