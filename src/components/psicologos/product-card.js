import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Typography } from '@mui/material';

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={product.profileImageUrl}
          variant="square"
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.firstName}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {product.description}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

