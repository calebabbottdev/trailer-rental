import { Box, Grid, Paper, Typography, useTheme } from '@mui/material';

export default function HowItWorks() {
  const theme = useTheme();

  return (
    <Box>
      <Typography variant='h2' align='center' sx={{ py: 3 }}>
        How it works
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ bgcolor: theme.palette.background.default }}>
            <Typography variant='h3' align='center'>
              As a trailer renter
            </Typography>
            <Typography>
              Renting the perfect trailer through Neighbors Trailer is as simple
              as searching for the type of trailer you need and placing a
              booking. Browse through hundreds of local trailer rentals
              available in your area and connect with the trailer owner. No
              corporate hassles or other obstacles in the way. With Insurance
              coverage available, you can seamlessly rent an insured trailer
              with confidence and peace of mind.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper sx={{ bgcolor: theme.palette.background.default }}>
            <Typography variant='h3' align='center'>
              As a trailer owner
            </Typography>
            <Typography>
              With Neighbors Trailer, you can offer trailer rentals to members
              of your local community with no other tools needed. Our all-in-one
              platform allows you to complete every process needed in order to
              complete rentals from start to finish. Simply create your first
              listing by signing up, following a few simple steps, and wait for
              the queries to start streaming in. Enjoy the protection of
              insurance coverage and flexibility of easy scheduling.{' '}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
