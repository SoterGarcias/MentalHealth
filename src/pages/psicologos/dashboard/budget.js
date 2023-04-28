import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export const Budget = (props) => (
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
                    backgroundColor: "#F2E6A7",
                    height: 56,
                    width: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <StarIcon />
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
                    backgroundColor: "#EEBBB9",
                    height: 56,
                    width: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <WarningAmberIcon />
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
                    backgroundColor: "#A8D9EF",
                    height: 56,
                    width: 56,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <PeopleAltIcon />
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
