import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

const SignInForm = ({ handleSubmit }) => (
  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
    />
    <TextField
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
    />
    <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
    />
    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
      Sign In
    </Button>
  </Box>
);

export default SignInForm;
