import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Link,
} from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/layout';
import db from '../utils/db';
import Product from '../models/Product';
import Banner from '../models/Banner';
import Carousel from 'react-material-ui-carousel';
import useStyles from '../utils/styles';

export default function Home(props) {
  const classes = useStyles();
  const { products, featuredProducts } = props;
  const style = {
    height: 400,
    width: 600,
  };

  return (
    <Layout>
      <div>
        <h1>Popular Product</h1>
        <Carousel className={classes.mt1} animation="slide">
          {featuredProducts.map((product) => (
            <NextLink key={product._id} href={`${product.link}`}>
              <Link>
                <img
                  src={product.image}
                  alt={product.title}
                  className={classes.featuredImage}
                ></img>
              </Link>
            </NextLink>
          ))}
        </Carousel>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      media="img"
                      image={product.image}
                      style={style}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${product.price}</Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  const featuredProductsDocs = await Banner.find({}).lean().limit(3);
  return {
    props: {
      products: products.map(db.convertDocToObj),
      featuredProducts: featuredProductsDocs.map(db.convertDocToObj),
    },
  };
}
