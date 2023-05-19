import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
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
        <Card sx={{ height: "100%", backgroundColor: "transparent" }} {...props}>
          <CardContent>
            <Grid container spacing={3} alignItems="center">
              <Grid item>
                <Avatar
                  sx={{
                    backgroundColor: "#A8D9EF",
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
              <Grid item>
                <Typography color="textPrimary" variant="h4">
                  Ligações
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="overline">
                  Call your doctor directly
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
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
    <Card sx={{ height: "100%", backgroundColor: "transparent" }} {...props}>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{
                backgroundColor: "#EEBBB9",
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
          <Grid item>
            <Typography color="textPrimary" variant="h4">
              Mensagens
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="overline">
              Chat me up, share photos
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
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
        <Card sx={{ height: "100%", backgroundColor: "transparent" }} {...props}>
          {
            <CardContent>
              <Grid container spacing={3} alignItems="center">
                <Avatar
                  sx={{
                    backgroundColor: "#F2E6A7",
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
                    Vídeo chamadas
                  </Typography>
                  <Typography color="textSecondary" gutterBottom variant="overline">
                    See your doctor
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
