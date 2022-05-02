import React from 'react';
import {ThemeProvider} from "@mui/material";
import {theme} from "./constants";
import { AppRouter } from './routing';

function App() {
  return (
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
  );
}

export default App;
