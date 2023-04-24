import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import { Download as DownloadIcon } from '../../icons/download';
import { Star as StarIcon} from '../../icons/star'; 

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent sx={{cursor: 'pointer'}}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
          
        }}
      >
        <Avatar
          alt="Product"
          src={product.media}
          variant="square"
          
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.title}
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
          <StarIcon sx={{ color: '#FFD700' }} />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ 
              alignItems: 'center',
              pl: 1 
            }}
            variant="body2"
          >
            {product.notaEstrelas}
            {' '}
            {'('}
            {product.totalReviews}
            {' '}
            reviews
            {')'}
          </Typography>
        </Grid>
        
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

