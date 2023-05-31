/* eslint-disable react/jsx-max-props-per-line */
import { Box, Container, Grid, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { DashboardLayout } from "../../components/dashboard-layout";
import { psicologos } from "../../__mocks__/products";
import { Budget } from "./dashboard/budget";
import { Contato_psicologo } from "./dashboard/contato_psicologo";

const Psicologo = () => {
  const router = useRouter();
  const { psicologoId } = router.query;

  console.log("psicologoId:", psicologoId);

  const filtered = psicologos.filter((product) => product.id == psicologoId);
  console.log(filtered);
  const psicologo = filtered.length ? filtered[0] : undefined;
  console.log("psicologo:", psicologo);

  return (
    <>
      <Head>
        <title>Psicólogos | Mental Health</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
          backgroundColor: "#EDEDED",
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              <section>
                {psicologo ? (
                  <div className="profile-section">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img
                        src={psicologo.profileImageUrl}
                        alt=""
                        width={150}
                        height={150}
                        style={{ borderRadius: "50%" }}
                      />
                      <div style={{ marginLeft: "10px" }}>
                        <h2>{psicologo.title}</h2>
                        <p>Psicologo(a)</p>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        <Button variant="contained" color="primary" onClick={() => { }}>
                          Agendar uma consulta
                        </Button>
                      </div>
                    </div>

                    <Budget />
                    <br></br>
                    <h2>Sobre o Dr(a)</h2>
                    <p>{psicologo.description}</p>
                    <p>{psicologo.notaEstrelas}</p>
                    <br></br>
                    <p>
                      <h2>Horário de Trabalho</h2>
                    </p>
                    <p>Seg - Sex (8:30 - 19:00)</p>
                    <br></br>
                    <p>
                      <h2>Contato:</h2>
                      <Contato_psicologo />
                    </p>
                  </div>
                ) : (
                  <p>Psicologo não foi encontrado!</p>
                )}
              </section>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Psicologo.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Psicologo;
