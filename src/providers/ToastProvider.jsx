import { useContext, createContext, useState, useMemo } from 'react';

export const SnackContext = createContext(undefined);

export const useSnack = () => {
  const { snack, setSnack } = useContext(SnackContext);

  const show = (value) => {
    setSnack({
      ...value,
      open: true,
    });
  };

  const hide = () => {
    setSnack({
      ...snack,
      open: false,
    });
  };

  const message = {
    success: (msg) => {
      show({
        message: msg,
        status: 'success',
      });
    },
    error: (msg) => {
      show({
        message: msg,
        status: 'error',
      });
    },
  };

  return {
    snack,
    setSnack,
    show,
    hide,
    message,
  };
};

const ToastProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    open: false,
    message: '',
    status: 'success',
  });
  const value = useMemo(() => {
    return {
      snack,
      setSnack,
    };
  }, [snack, setSnack]);

  return (
    <SnackContext.Provider value={value}>{children}</SnackContext.Provider>
  );
};

export default ToastProvider;
