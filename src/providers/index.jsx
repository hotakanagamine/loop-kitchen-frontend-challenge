import AppThemeProvider from './ThemeProvider';
import ToastProvider from './ToastProvider';

const Provider = ({ children }) => {
  return (
    <AppThemeProvider>
      <ToastProvider>{children}</ToastProvider>
    </AppThemeProvider>
  );
};

export default Provider;
