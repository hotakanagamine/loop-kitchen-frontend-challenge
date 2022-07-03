import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Theme } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { useSnack } from '../../providers/ToastProvider';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AppSnackBar = () => {
  const {
    snack: { open, message, status },
    hide,
  } = useSnack();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    hide();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={status}
        sx={{ width: '100%', fontSize: '16px' }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackBar;
