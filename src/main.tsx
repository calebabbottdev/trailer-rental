import React from 'react';
import ReactDOM from 'react-dom/client';

// Assets
import theme from '@assets/theme';

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';

// MUI Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// React Router
import { RouterProvider } from 'react-router-dom';

// Routes
import { router } from '@routes/routes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
