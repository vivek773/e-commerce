import { useRouter } from "next/router";
import React from "react";
import Layout from "../../components/Layout";
import data from "../../utils/data";
import NextLink from "next/link";
import {
  Button,
  Card,
  Grid,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import useStyles from "../../utils/styles";
import Image from "next/image";

const ProductScreen = () => {
  const classes = useStyles();
  const router = useRouter();
  console.log("router", router);
  const { slug } = router.query;
  console.log("slug", slug);
  const product = data.products.find((a) => a.slug === slug);
  console.log("product", product.image);
  if (!product) {
    return <h1>Product Not Found</h1>;
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className={classes.section}>
        <NextLink href="/" passHref>
          <Button variant="contained" color="primary">
            <Typography>Back To Products</Typography>
          </Button>
        </NextLink>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            Layout="responsive"
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component="h4" variant="h">
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h6" variant="h6">
                Category:- {product.category}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h6" variant="h6">
                Brand:- {product.brand}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h6" variant="h6">
                Rating:- {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography component="h6" variant="h6">
                Description:- {product.description}
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>${product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography>Staus</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>
                      {product.countInStock > 0 ? "In Stock" : "Unavailable"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant="contained" color="primary">
                  Add To Cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductScreen;
