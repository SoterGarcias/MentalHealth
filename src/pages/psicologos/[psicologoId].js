/* eslint-disable react/jsx-max-props-per-line */
import { Box, Container, Grid } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { DashboardLayout } from "../../components/dashboard-layout";
import { psicologos } from "../../__mocks__/products";
import { Budget } from "./dashboard/budget";
import { Contato_psicologo } from "./dashboard/contato_psicologo";

const Psicologo = () => {
  const router = useRouter();
  const { psicologoId } = router.query;

  const filtered = psicologos.filter((product) => product.id == psicologoId);
  const psicologo = filtered.length ? filtered[0] : undefined;

  return (
    <>
      <Head>
        <title>Psicólogos | Mental Health</title>
      </Head>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              <section>
                <h1>Psicologo</h1>
                {psicologo ? (
                  <div>
                    <img src={psicologo.media} alt="" width={300} height={300} />
                    <Budget />
                    <br></br>
                    <h2>{psicologo.title}</h2>
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
                  <p>Psicologo não foi encontrado</p>
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
