import Head from "next/head";
import { Box, Container, Grid, Pagination } from "@mui/material";
import { useState, useEffect } from "react";
import { ProductListToolbar } from "../components/psicologos/product-list-toolbar";
import { ProductCard } from "../components/psicologos/product-card";
import { DashboardLayout } from "../components/dashboard-layout";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { db } from "../../src/lib/firebase";
import Link from "next/link";

const Page = () => {
  const [loadedProducts, setLoadedProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productsRef = collection(db, "psicologos"); 
        const querySnapshot = await getDocs(productsRef); 
        const products = [];

        querySnapshot.forEach((doc) => {
          const productData = doc.data(); // Dados do documento
          productData.id = doc.id; // Add the document ID
          products.push(productData);
        });

        setLoadedProducts(products);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  console.log("psicologos: ", loadedProducts);

  return (
    <>
      <Head>
        <title>Products | Material Kit</title>
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
          <Box sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              {loadedProducts.map((product) =>
                product.typeUser === "" ? null : (
                  <Grid item key={product.id} lg={4} md={6} xs={12}>
                    <Link href={`/psicologos/${product.id}`}>
                      <ProductCard product={product} />
                    </Link>
                  </Grid>
                )
              )}
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

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
