// MUI
import { Button, Grid, Typography } from '@mui/material';

export default function HomePageHeader() {
  return (
    <Grid container>
      <Grid container item xs={12} md={8}>
        <Grid item xs={12}>
          <Typography variant='h1'>
            A modern solution for all your trailer rental needs
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body1'>
            Some sub-text giving context to the application
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button>Search</Button>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4}>
        <Typography variant='h1'>
          Test that should be hidden on mobile
        </Typography>
      </Grid>
    </Grid>
  );
}
