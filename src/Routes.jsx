import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './containers/pages/SignIn';

export const RouteLinks = {
  SignIn: '/signin',
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouteLinks.SignIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
