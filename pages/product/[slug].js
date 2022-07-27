import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Link, Grid, List, ListItem, Typography } from '@material-ui/core';
import Layout from '../../components/layout';
import useStyles from '../../utils/styles';
import db from '../../utils/db';
import Product from '../../models/Product';

export default function ProductScreen(props) {
  const { product } = props;
  const classes = useStyles();
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Link>
            <Typography>Back to product</Typography>
          </Link>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h1" variant="h1">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category : {product.category}</Typography>
            </ListItem>
            <ListItem>
              <Typography>Price : {product.price}</Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps(contex) {
  const { params } = contex;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  return {
    props: {
      product: db.convertDocToObj(product),
    },
  };
}
