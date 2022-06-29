import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { green } from '@mui/material/colors';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';

import SignIn from './containers/pages/SignIn';

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: green[800],
      },
    },
  }),
);

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
