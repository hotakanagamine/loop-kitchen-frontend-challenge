import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from './containers/pages/Home/Home';
import Bookmark from './containers/pages/Bookmark/Bookmark';
import SignIn from './containers/pages/SignIn';

import { ROUTES } from './utils/constants';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.SIGNIN} element={<SignIn />} />
        <Route path={ROUTES.BOOKMARK} element={<Bookmark />} />
        <Route path="/" element={<Navigate replace to={ROUTES.HOME} />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
