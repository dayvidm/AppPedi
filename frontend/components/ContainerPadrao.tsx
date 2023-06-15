import { Box, Grid, Paper, PaperProps } from '@mui/material';
import { ReactNode } from 'react';

interface FormContainerProps extends PaperProps {
  children: ReactNode;
}

export function ContainerPadrao({
  children,
  ...paperProps
}: FormContainerProps) {
  return (
    
      <Paper
        sx={{
          backgroundColor: 'background.form',
          my: 2,
          p: 10,
          boxShadow: 'none',
          border: '1px solid #D4D4D4',
          width: '95%',
          marginTop: '10%',
          ...paperProps.sx,
        }}
        {...paperProps}
      >
        {children}
      </Paper>
  );
}
