import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

export const Budget = (props) => (
  <Grid container spacing={3}>
    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%", margin: 0 }} {...props}>
          <CardContent>
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
              <StarIcon />
            </Avatar>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
              <Grid item>
                <Typography color="textPrimary" variant="h6">
                  4.5
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="subtitle1">
                  Estrelas
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
    </Grid>
    </Grid>
    {/* TAG 2 ------------------------------------------------------------------------------------ */}

    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%" }} {...props}>
          <CardContent>
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
              <WarningAmberIcon />
            </Avatar>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
              <Grid item>
                <Typography color="textPrimary" variant="h6">
                  10 Anos
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="subtitle1">
                  Tempo de Formação
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>

    {/* TAG 3 ------------------------------------------------------------------------------------------- */}

    <Grid item xs={12} sm={4}>
      <Box
        sx={{
          pt: 1,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card sx={{ height: "100%" }} {...props}>
          <CardContent>
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
              <PeopleAltIcon />
            </Avatar>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
              <Grid item>
                <Typography color="textPrimary" variant="h6">
                  1000+
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="subtitle1">
                  Atendimentos Realizados
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  </Grid>
);
