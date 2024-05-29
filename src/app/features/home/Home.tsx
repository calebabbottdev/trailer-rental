// MUI
import { Box } from '@mui/material';

// Components
import Container from '@container';
import HomePageHeader from '@features/home/components/HomePageHeader';

export default function Home() {
  console.log('Home');
  return (
    <Box sx={{ bgcolor: '#eee' }}>
      {/* <Container id='home-container'>{HomePageHeader()}</Container> */}
      Home
    </Box>
  );
}
