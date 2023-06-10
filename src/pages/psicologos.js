import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { ProductListToolbar } from "../components/psicologos/product-list-toolbar";
import { ProductCard } from "../components/psicologos/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { getDocs, collection } from "firebase/firestore/lite";
import { db } from "../lib/firebase";
import { useState, useEffect } from "react";

console.log("Verifying Page component");

const Psicologos = () => {
  const router = useRouter();
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Iniciando busca dos produtos...");
    const fetchProducts = async () => {
      try {
        const productRef = collection(db, "psicologos");
        const querySnapshot = await getDocs(productRef);

        const productsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          console.log("data", data);
          return data;
        });
        setProductsData(productsData);
      } catch (error) {
        setError("Erro ao buscar os produtos.");
      }
    };

    fetchProducts();
  }, []);

  console.log("Inside Page component");
  console.log("Router initialized", router);

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
          <ProductListToolbar />

          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {productsData.map((product) => (
                <Link key={product.id} href={`/psicologos/${product.id}`}>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProductCard product={product} id={product.id} />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              pt: 3,
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Psicologos.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Psicologos;