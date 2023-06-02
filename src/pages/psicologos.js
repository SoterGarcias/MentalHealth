import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/psicologos/product-list-toolbar';
import { ProductCard } from '../components/psicologos/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import Link from 'next/link';
import { useRouter } from "next/router";
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../lib/firebase';
import { useState, useEffect } from 'react';


console.log("Verifying Page component"); // Adicione esta linha
const Psicologos = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null); // Adicione esta linha
  
  useEffect(() => {
    console.log('Iniciando busca do produto...');
    const fetchProduct = async () => {
      try {
        const productRef = collection(db, 'psicologos');
        const querySnapshot = await getDocs(productRef);
    
        const productsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        setProduct(productsData);
      } catch (error) {
        setError('Erro ao buscar os produtos.');
      }
    };
  
    fetchProduct();
  }, []);
  
  console.log("Inside Page component"); // Adicione esta linha
  const router = useRouter();
  console.log("Router initialized", router); // Adicione esta linha

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
              {product?.map((product) => (
                <Link key={product.id} href={`/psicologos/${product.id}`}>
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                  >
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
