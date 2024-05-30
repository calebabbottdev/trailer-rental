// Components
import Gallery from '@features/home/components/Gallery';

// MUI
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';

export default function SearchByType() {
  return (
    <Box sx={{ py: 3 }}>
      <Typography variant='h2' align='center'>
        Search by trailer type
      </Typography>
      <Gallery />
    </Box>
  );
}
