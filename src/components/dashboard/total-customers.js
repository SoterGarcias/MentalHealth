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


{/* <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TOTAL CUSTOMERS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1,6k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <PeopleIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          pt: 2
        }}
      >
        <ArrowUpwardIcon color="success" />
        <Typography
          variant="body2"
          sx={{
            mr: 1
          }}
        >
          16%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent> */}
