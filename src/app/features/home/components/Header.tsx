// MUI
import {
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

const Header = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container sx={{ py: 3 }}>
      <Grid item>
        <Typography
          variant='h1'
          color={theme.palette.primary.main}
          sx={{ py: 3 }}
        >
          The future of trailer rentals
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='body1' color={theme.palette.text.primary}>
          Iure ex explicabo nostrum, cum optio cumque quasi assumenda eius
          dolores rem tenetur adipisci mollitia nemo tempore provident natus
          beatae! Facilis, non?
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ py: 3 }}>
        <Button variant='contained' color='secondary' fullWidth={isSmall}>
          Search trailers
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
