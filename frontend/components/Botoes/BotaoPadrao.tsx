import {
  Button,
  ButtonProps,
  Grid,
  GridProps,
  Tooltip,
  useMediaQuery,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { ChangeEvent, ReactNode } from 'react';

interface IBotaoPadraoProps extends ButtonProps {
  children?: string | ReactNode;
  loading?: boolean;
  gridProps?: GridProps;
  uploadFile?: boolean;
  uploadMuliple?: boolean;
  accept?: string;
  onChangeFile?: (event: ChangeEvent<HTMLInputElement>) => void;
  tooltipText?: string;
  tooltipState?: boolean;
}

export function BotaoPadrao({
  loading,
  children,
  fullWidth,
  gridProps,
  uploadFile = false,
  uploadMuliple = false,
  tooltipState,
  tooltipText,
  accept,
  onChangeFile,
  ...buttonProps
}: IBotaoPadraoProps) {
  const isDesktop = useMediaQuery('(min-width:600px)');
  const mobileXS = 12;

  const renderInputFile = (
    <input
      hidden
      accept={accept}
      type="file"
      multiple={uploadMuliple}
      onChange={onChangeFile}
    />
  );

  return (
    <Grid item xs={gridProps?.xs ?? (isDesktop ? 'auto' : mobileXS)}>
      <Tooltip title={tooltipText}>
        <div>
          <Button
            component={uploadFile ? 'label' : 'button'}
            variant={buttonProps.variant ?? "contained"}
            size="medium"
            color={buttonProps.color ?? "secondary"}
            fullWidth={fullWidth || !isDesktop}
            {...buttonProps}
            startIcon={
              loading ? (
                <CircularProgress size={22} color="inherit" />
              ) : (
                buttonProps.startIcon
              )
            }
            disabled={loading || buttonProps.disabled}
            sx={{
              borderRadius: '15px',
              fontWeight: 700,
              paddingY: buttonProps.size === 'large' ? '10px' : 'auto',
              ...buttonProps.sx,
            }}
          >
            {loading ? 'Carregando...' : children}
            {uploadFile && renderInputFile}
          </Button>
        </div>
      </Tooltip>
    </Grid>
  );
}
