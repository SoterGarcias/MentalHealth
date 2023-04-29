import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

export const TasksProgress = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <Box sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ flex: '1 0 calc(100% - 10px)', position: 'relative' }}>
            <img src="/static/images/dashboard/Calendario.jpg" alt="Calendário" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '30px', backgroundColor: 'rgba(167, 219, 245, 0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="subtitle1" sx={{ color: '#1D242E', fontWeight: 'bold' }}>Consultas semanais</Typography>
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
      TASKS PROGRESS
    </Typography>
    <Typography
      color="textPrimary"
      variant="h4"
    >
      75.5%
    </Typography>
  </Grid>
  <Grid item>
    <Avatar
      sx={{
        backgroundColor: 'warning.main',
        height: 56,
        width: 56
      }}
    >
      <InsertChartIcon />
    </Avatar>
  </Grid>
</Grid>
<Box sx={{ pt: 3 }}>
  <LinearProgress
    value={75.5}
    variant="determinate"
  />
</Box>
</CardContent> */}