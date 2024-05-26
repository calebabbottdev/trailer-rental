import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#00C7E6',
      contrastText: '#000',
    },
    secondary: {
      main: '#F79B19',
      contrastText: '#fff',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#000',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 500,
      fontSize: 28,
      '@media (min-width:600px)': {
        fontSize: 34,
      },
      '@media (min-width:900px)': {
        fontSize: 40,
      },
      '@media (min-width:1200px)': {
        fontSize: 44,
      },
    },
  },
});

export default theme;
