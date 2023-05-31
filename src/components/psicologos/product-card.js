import { Avatar, Box, Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../../lib/firebase';

export const ProductCard = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Iniciando busca do produto...');
    const fetchProduct = async () => {
      try {
        const productRef = collection(db, 'psicologos');
        console.log('Referência do produto:', productRef);
        const querySnapshot = await getDocs(productRef);
        console.log('Snapshot do produto:', querySnapshot);
    
        const productsData = querySnapshot.docs.map((doc) => doc.data());
        console.log('Dados dos produtos:', productsData);
        setProduct(productsData);
      } catch (error) {
        setError('Erro ao buscar os produtos.');
        console.log('Erro ao buscar os produtos:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, []);

  if (loading) {
    return <Typography align="center">Carregando...</Typography>;
  }

  if (error) {
    return <Typography align="center" color="error">{error}</Typography>;
  }

  if (!product) {
    return null;
  }

  const handleBooking = (productId) => {
    console.log(`Agendar produto ${productId}`);
  };

  return (
    <>
      {product.map((item) => {
        if (item.typeUser === '') {
          return null;
        }
  
        return (
          <Card
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%'
            }}
          >
            <CardContent sx={{ cursor: 'pointer' }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <Avatar alt="Product" variant="square" />
                </Grid>
                <Grid item xs style={{ width: '500px' }}>
                  <Typography align="center" color="textPrimary" gutterBottom variant="h5">
                    {item.title}
                  </Typography>
                  <Typography align="center" color="textPrimary" variant="body1">
                    {item.description}
                  </Typography>
                </Grid>
                <Grid item sx={{ display: 'flex' }}>
                  <Button variant="contained" color="primary" onClick={() => handleBooking(item.id)}>
                    Agendar
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
                <Grid item sx={{ alignItems: 'center', display: 'flex' }}>
                  <Typography
                    color="textSecondary"
                    display="inline"
                    sx={{
                      alignItems: 'center',
                      pl: 1
                    }}
                    variant="body2"
                  ></Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
        );
      })}
    </>
  );
};
