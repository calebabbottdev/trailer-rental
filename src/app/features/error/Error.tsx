// MUI
import { Box, Button, Container, Grid, Typography } from '@mui/material';

// React Router
import { useRouteError, Link } from 'react-router-dom';

type Error = {
  data: string;
  internal: boolean;
  status: number;
  statusText: string;
  message: string;
};

const Error = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <Box id='error-page'>
      <Container maxWidth='xs'>
        <Grid
          container
          direction='column'
          justifyContent='center'
          //   alignItems='center'
          spacing={2}
          sx={{ minHeight: '50vh' }}
        >
          <Grid item xs={12}>
            <Typography variant='h1' textAlign='center'>
              {error.statusText}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant='body1'
              color='textSecondary'
              textAlign='center'
            >
              Uh oh, we ran into an unexpected error. Try navigating back home.
              If the issue persists, log an issue.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              id='go-home-button'
              variant='outlined'
              component={Link}
              to='/'
              fullWidth
            >
              Go home
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              id='log-an-issue-button'
              variant='text'
              component={Link}
              target='_blank'
              to='https://github.com/calebabbottdev/trailer-rental/issues'
              fullWidth
            >
              Log an issue
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Error;
