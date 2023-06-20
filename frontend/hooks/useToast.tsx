import { SnackbarKey, useSnackbar, VariantType } from 'notistack';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ReactNode } from 'react';

export function useToast() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const toastSuccess = (message: string) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'success',
      SnackbarProps: {
        onClick: () => closeSnackbar(key),
      },
    });
  };

  const toastConfirmSuccess = (message: string | ReactNode) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'success',
      autoHideDuration: null,
      action: () => (
        <Button onClick={() => closeSnackbar(key)} sx={{ color: grey[50] }}>
          OK
        </Button>
      ),
    });
  };

  const toastError = (message: string) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'error',
      SnackbarProps: {
        onClick: () => closeSnackbar(key),
      },
    });
  };

  const toastConfirmError = (message: JSX.Element | string) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'error',
      autoHideDuration: null,
      action: () => (
        <Button onClick={() => closeSnackbar(key)} sx={{ color: grey[50] }}>
          OK
        </Button>
      ),
    });
  };

  const toastInfo = (message: string) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'info',
      SnackbarProps: {
        onClick: () => closeSnackbar(key),
      },
    });
  };

  const toastWarning = (message: string) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'warning',
      SnackbarProps: {
        onClick: () => closeSnackbar(key),
      },
    });
  };

  const defaultToast = (message: string) => {
    const key: SnackbarKey = enqueueSnackbar(message, {
      variant: 'default',
      SnackbarProps: {
        onClick: () => closeSnackbar(key),
      },
    });
  };

  const customActionToast = (
    message: string,
    variant: VariantType,
    onConfirmAction: () => void,
    confirmButtonText: string,
    cancelButtonText: string
  ) => {
    const key = enqueueSnackbar(message, {
      variant: variant,
      autoHideDuration: null,
      action: () => (
        <>
          <Button
            onClick={() => {
              closeSnackbar(key);
            }}
            sx={{ color: grey[50] }}
          >
            {cancelButtonText}
          </Button>
          <Button
            onClick={() => {
              onConfirmAction();
              closeSnackbar(key);
            }}
            sx={{ color: grey[50] }}
          >
            {confirmButtonText}
          </Button>
        </>
      ),
    });
  };

  return {
    toastSuccess,
    toastError,
    toastInfo,
    toastWarning,
    defaultToast,
    toastConfirmSuccess,
    toastConfirmError,
    customActionToast,
  };
}
