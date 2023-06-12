import { Box, Container, Grid, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { DashboardLayout } from "../../components/dashboard-layout";
import { Budget } from "./dashboard/budget";
import { Contato_psicologo } from "./dashboard/contato_psicologo";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import { firebase } from "../../lib/firebase";

const db = getFirestore(firebase);

const Psicologo = () => {
  const userPsicIdString = localStorage.getItem('userData');
  const userPsic = JSON.parse(userPsicIdString);
  const userPsicId = userPsic.psi_Id;
  const userLocalID = userPsic.id;
  console.log("Valor em userPsicId:", userPsicId);

  const router = useRouter();
  const { psicologoId } = router.query;
  const [psicologo, setPsicologo] = useState(null);

  useEffect(() => {
    const fetchPsicologoData = async () => {
      try {
        const psicologoRef = doc(collection(db, "psicologos"), psicologoId);
        const psicologoSnap = await getDoc(psicologoRef);

        console.log(psicologoSnap);

        if (psicologoSnap.exists()) {
          const psicologoData = { id: psicologoId, ...psicologoSnap.data() };
          console.log(psicologoData);
          setPsicologo(psicologoData);
        } else {
          console.log("Psicólogo não encontrado!");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do psicologo:", error);
      }
    };

    if (psicologoId) {
      fetchPsicologoData();
    }
  }, [psicologoId]);


  const handleConsultationRequest = async () => {
    const dataToSave = {
      psi_Url: psicologo.profileImageUrl,
      psi_firstName: psicologo.firstName,
      psi_Id: psicologo.id
    };

    console.log('Dados a serem salvos:', dataToSave);
    console.log('ID onde os dados a serem salvos:', userLocalID);

    const psicologosRef = collection(db, 'psicologos');
    const userRef = doc(psicologosRef, userLocalID);

    try {
      await setDoc(userRef, dataToSave, { merge: true });
      console.log('Mudanças salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar as mudanças:', error);
    }
  };



  console.log(psicologo, psicologoId);

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
            <Grid container
              spacing={3}>
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
                        <h2>{psicologo.firstName}</h2>
                        <p>Psicologo(a)</p>
                      </div>
                      <div style={{ marginLeft: "auto" }}>
                        {userPsicId ? (
                          psicologo.id === userPsicId ? (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={() => { }}>
                              Agendar uma consulta
                            </Button>
                          ) : (
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={handleConsultationRequest}>
                              Quero me consultar
                            </Button>
                          )
                        ) : (
                          <Button variant="contained" color="primary" onClick={handleConsultationRequest}>
                            Quero me consultar
                          </Button>
                        )}
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
