import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./constants";
import { AppRouter } from './routing';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://api.8base.com/cl2oocdhw00qs09lb5x5o3yfd',
    cache: new InMemoryCache(),
    headers: {
        authorization: 'Bearer b85d67a5-8ae9-4b29-8efb-71a1d0629c2a'
    }
})


function App() {
  return (
      <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
              <CssBaseline />
              <AppRouter/>
          </ThemeProvider>
      </ApolloProvider>
  );
}

export default App;
