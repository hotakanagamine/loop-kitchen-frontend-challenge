import Provider from './providers';
import AppRoutes from './Routes';
import AppSnackBar from './components/SnackBar';

const App = () => (
  <Provider>
    <AppRoutes />
    <AppSnackBar />
  </Provider>
);

export default App;
