import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "../theme";
import GlobalStyles from "../GlobalStyles";
import "../node_modules/pure-react-carousel/dist/react-carousel.es.css";

export default class MyApp extends App {
  render(): JSX.Element {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} key={router.route} />
      </ThemeProvider>
    );
  }
}
