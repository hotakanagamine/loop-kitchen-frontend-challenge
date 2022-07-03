import { useNavigate } from 'react-router-dom';
import {
  Grid,
  Box,
  CssBaseline,
  Paper,
  Avatar,
  Link,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockClockOutlined';

import SignInForm from './SignInForm';
import Copyright from '../../../components/Copyright';

import { fetchCredentials } from '../../../services/auth.service';

import { getRandomInt } from '../../../utils';

import { useSnack } from '../../../providers/ToastProvider';
import { RouteLinks } from '../../../utils/constants';

const imageNo = getRandomInt(10);

const SignInPage = () => {
  const { message } = useSnack();
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      const { records } = await fetchCredentials();
      const user = records.find(
        (record) =>
          record.fields.username === data.get('username') &&
          record.fields.password === data.get('password')
      );
      if (!user) {
        message.error('Invalid username and password');
      } else {
        message.success('Sign in successfully');
        navigate(RouteLinks.Home);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(/assets/images/restaurant-${imageNo}.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        px={{ md: '16px', lg: '32px' }}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <SignInForm handleSubmit={handleLogin} />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInPage;
