import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Provider from './providers';
import AppSnackBar from './components/SnackBar';
import SignIn from './containers/pages/SignIn';

const App = () => (
  <Provider>
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    <AppSnackBar />
  </Provider>
);

export default App;
