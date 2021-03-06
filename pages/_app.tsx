import "../styles/global.css";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { storeWrapper } from "../store";
import Head from "next/head";
import { AppProps } from "next/app";

const theme = {
  colors: {
    primary: "#0070f3",
    gradient: "hsl(6, 100%, 80%) to hsl(335, 100%, 65%)",
    paleblue: "hsl(243, 100%, 93%)",
    grayishblue: "hsl(229, 7%, 55%)",
    darkblue: "hsl(228, 56%, 26%)",
    verydarkblue: "hsl(229, 57%, 11%)",
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${theme.colors.verydarkblue};
  }
`;

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Desafio - Flimed</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default storeWrapper.withRedux(App);
