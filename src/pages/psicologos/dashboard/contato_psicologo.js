import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

export const Contato_psicologo = (props) => (
  <Grid container direction="row" spacing={3}>
    <Grid item>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%" }} {...props}>
          {
            <CardContent>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: "Blue",
                    height: 56,
                    width: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CallOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography color="textPrimary" variant="h4">
                    4.5
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="overline">
                    Estrelas
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          }
        </Card>
      </Box>
    </Grid>

    {/* TAG 2 ------------------------------------------------------------------------------------ */}

    <Grid item>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%" }} {...props}>
          {
            <CardContent>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: "red",
                    height: 56,
                    width: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ChatOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography color="textPrimary" variant="h4">
                    10 Anos
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="overline">
                    Tempo de Formação
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          }
        </Card>
      </Box>
    </Grid>

    {/* TAG 3 ------------------------------------------------------------------------------------------- */}

    <Grid item>
      <Box
        sx={{
          pt: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%" }} {...props}>
          {
            <CardContent>
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: "Orange",
                    height: 56,
                    width: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VideocamOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography color="textPrimary" variant="h4">
                    1000+
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="overline">
                    Atendimentos Realizados
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          }
        </Card>
      </Box>
    </Grid>
  </Grid>
);
