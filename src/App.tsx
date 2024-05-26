// MUI
import { ThemeProvider, Typography } from '@mui/material';
import theme from '@assets/theme';

// Util
import app from '@util/firebaseConfig';

function App() {
  console.log('Vite: ', import.meta.env);
  console.log('FB: ', app);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h1'>
        {import.meta.env.VITE_FIREBASE_PROJECT_ID}
      </Typography>
    </ThemeProvider>
  );
}

export default App;
