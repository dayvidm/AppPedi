import { Grid, PaperProps } from '@mui/material';
import { FormEvent, FormEventHandler, ReactNode } from 'react';
import { ContainerPadrao } from './ContainerPadrao';

interface FormContainerProps extends PaperProps {
  children: ReactNode;
  onSubmitHandler?: FormEventHandler;
}

export function FormContainer({
  children,
  onSubmitHandler,
  ...paperProps
}: FormContainerProps) {
  return (
    <ContainerPadrao {...paperProps}>
      <Grid
        component="form"
        container
        spacing={2}
        justifyContent={'center'}
        onSubmit={(event: FormEvent) => {
          if (onSubmitHandler) {
            onSubmitHandler(event);
          }
        }}
      >
        {children}
      </Grid>
    </ContainerPadrao>
  );
}
