import Head from "next/head";
import React from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import NextLink from "next/link";

const Layout = ({ title, description, children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>

        <title>{title ? `${title} - खंडेलवाल Store` : "खंडेलवाल Store"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>खंडेलवाल Store</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <div>
            <NextLink href="/cart" passHref>
              <Link>Cart </Link>
            </NextLink>
            <NextLink href="/login" passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. खंडेलवाल Store</Typography>
      </footer>
    </div>
  );
};

export default Layout;
