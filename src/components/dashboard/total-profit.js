import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export const TotalProfit = (props) => (
  <Card {...props}>
   <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
     <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <WarningAmberIcon sx={{ color: 'red', fontSize: '3rem' }} />
      </Box>
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30px', backgroundColor: 'rgba(238, 190, 190, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: '#1D242E', fontWeight: 'bold' }}>Resolve Now</Typography>
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
            TOTAL PROFIT
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $23k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'primary.main',
              height: 56,
              width: 56
            }}
          >
            <AttachMoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
    </CardContent> */}