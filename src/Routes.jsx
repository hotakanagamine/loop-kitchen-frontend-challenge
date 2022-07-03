import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './containers/pages/Home';
import Bookmark from './containers/pages/Bookmark';
import SignIn from './containers/pages/SignIn';

import { RouteLinks } from './utils/constants';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={RouteLinks.Home} element={<Home />} />
        <Route path={RouteLinks.Bookmark} element={<Bookmark />} />
        <Route path={RouteLinks.SignIn} element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
