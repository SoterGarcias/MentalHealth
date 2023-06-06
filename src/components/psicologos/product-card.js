import Head from 'next/head';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../../lib/firebase';
import { useState, useEffect } from 'react';
import { ProductCard } from '../../components/psicologos/product-card';
import { DashboardLayout } from '../../components/dashboard-layout';
import Link from 'next/link';

const Psicologos = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productRef = collection(db, 'psicologos');
        const querySnapshot = await getDocs(productRef);
        const productsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        });
        setProduct(productsData);
        setLoading(false);
      } catch (error) {
        setError('Erro ao buscar os produtos.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Psicólogos | Mental Health</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth={false}>
          <Typography align="center" variant="h5">
            {loading ? 'Carregando...' : error ? 'Erro ao buscar os produtos.' : 'Psicólogos'}
          </Typography>

          <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
              {product.map((productItem) => (
                <Link key={productItem.id} href={`/psicologos/${productItem.id}`}>
                  <Grid item lg={4} md={4} sm={6} xs={12}>
                    <ProductCard product={productItem} />
                  </Grid>
                </Link>
              ))}
            </Grid>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

Psicologos.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Psicologos;
