import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

export const Contato_psicologo = (props) => (
  <Grid container direction="row" spacing={3}>
    <Grid item>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%", backgroundColor: "transparent" }} {...props}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: "#A8D9EF",
                    height: 45,
                    width: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CallOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography color="textPrimary" variant="h6">
                    Ligações
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="subtitle1">
                  Ligue diretamente para o seu médico.
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
          pt: 1,
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
                    backgroundColor: "#EEBBB9",
                    height: 45,
                    width: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ChatOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography color="textPrimary" variant="h6">
                  Mensagens
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="subtitle1">
                  Converse comigo, compartilhe seus sentimentos.
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
          pt: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%", backgroundColor: "transparent" }} {...props}>
          {
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Avatar
                  sx={{
                    backgroundColor: "#F2E6A7",
                    height: 45,
                    width: 45,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <VideocamOutlinedIcon />
                </Avatar>
              </Grid>
              <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography color="textPrimary" variant="h6">
                  Vídeo chamadas 
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="subtitle1">
                  Consulte seu psicólogo(a) ao vivo
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
