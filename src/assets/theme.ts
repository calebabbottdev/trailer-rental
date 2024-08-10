import { createTheme } from '@mui/material/styles';

const primaryColor = '#023047';
const secondaryColor = '#219ebc';
const tertiaryColor = '#8ecae6';
const primaryTextColor = '#000';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: primaryColor,
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor,
      contrastText: '#fff',
    },
    background: {
      default: '#eee',
    },
    text: {
      primary: primaryTextColor,
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
      color: primaryColor,
      fontWeight: 700,
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
    h2: {
      color: primaryColor,
      fontWeight: 600,
      fontSize: 20,
      '@media (min-width:600px)': {
        fontSize: 26,
      },
      '@media (min-width:900px)': {
        fontSize: 32,
      },
      '@media (min-width:1200px)': {
        fontSize: 36,
      },
    },
    h3: {
      color: primaryColor,
      fontWeight: 500,
      fontSize: 16,
      '@media (min-width:600px)': {
        fontSize: 22,
      },
      '@media (min-width:900px)': {
        fontSize: 28,
      },
      '@media (min-width:1200px)': {
        fontSize: 32,
      },
    },
  },
});

export default theme;
