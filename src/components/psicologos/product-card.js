import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore/lite';
import { db } from '../../lib/firebase'; // Importe o objeto db do arquivo firebase.js

export const ProductCard = ({ ...rest }) => {
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

  console.log('Loading:', loading);
  console.log('Error:', error);
  console.log('Product:', product);

  if (loading) {
    return <Typography align="center">Carregando...</Typography>;
  }

  if (error) {
    return <Typography align="center" color="error">{error}</Typography>;
  }

  if (!product) {
    return null; // Se o produto não existe ou não foi carregado corretamente, você pode retornar null ou exibir uma mensagem apropriada
  }


  return (
    <>
      {product.map((item) => {
        if (item.typeUser === '') {
          return null; // Ignora o card se typeUser for uma string vazia
        }
  
        return (
        <Card
          key={item.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
          {...rest}
        >
          <CardContent sx={{ cursor: 'pointer' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pb: 3
              }}
            >
              <Avatar
                alt="Product"
                src={item.profileImageUrl}
                variant="square"
              />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h5"
            >
              {item.title}
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="body1"
            >
              {item.description}
            </Typography>
          </CardContent>
          <Box sx={{ flexGrow: 1 }} />
          <Divider />
          <Box sx={{ p: 2 }}>
            <Grid
              container
              spacing={2}
              sx={{ justifyContent: 'space-between' }}
            >
              <Grid
                item
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Typography
                  color="textSecondary"
                  display="inline"
                  sx={{
                    alignItems: 'center',
                    pl: 1
                  }}
                  variant="body2"
                >
                  {/* {item.notaEstrelas}
                  {' '}
                  {'('}
                  {item.totalReviews}
                  {' '}
                  reviews
                  {')'} */}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Card>
      );
    })}
  </>
);
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};