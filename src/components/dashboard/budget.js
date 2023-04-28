import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';


export const Budget = (props) => (
 
      <Card
        sx={{ height: '100%' }}
        {...props}
      >
        <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: '1 0 calc(100% - 10px)', position: 'relative' }}>
            <img src="/static/images/dashboard/psicologo.jpg" alt="Psicologo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30px', backgroundColor: 'rgba(1, 167, 104, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: '#FFF', fontWeight: 'bold' }}>Psicólogos</Typography>
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
            BUDGET
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >
            $24k
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent> */}
