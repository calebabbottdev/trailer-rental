// MUI
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';

// React Router
import { Link, Outlet } from 'react-router-dom';

// Routes
import { routes } from '@routes/routes';

export default function Navbar() {
  return (
    <>
      <AppBar
        position='static'
        color='inherit'
        sx={{ height: '75px', boxShadow: 'none', justifyContent: 'center' }}
      >
        <Container maxWidth='xl'>
          <Toolbar>
            <Button
              color='inherit'
              component={Link}
              to={routes.HOME}
              sx={{ mr: 'auto' }}
            >
              Home
            </Button>
            <Button color='inherit' component={Link} to={routes.LOGIN}>
              Login
            </Button>
            <Button color='inherit' component={Link} to={routes.SIGNUP}>
              Signup
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box id='outlet-container' children={<Outlet />} />
    </>
  );
}
