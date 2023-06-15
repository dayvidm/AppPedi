'use client'
import FormButton from "@/components/FormButton";
import { FormContainer } from "@/components/FormContainer";
import FormInput from "@/components/FormInput";
import { Box, Grid } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

export default function login() {
  const rhfmethods = useForm();
  return (
    <>
      <FormProvider {...rhfmethods}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <FormContainer >
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Faça Login</h2>
            </div>
            <Grid xs={2}>
              <FormInput label="E-mail" register={rhfmethods.register} />
              <FormInput label="Senha" register={rhfmethods.register} />
              <FormButton label="Entrar" />
            </Grid>
          </FormContainer>
        </Box>
      </FormProvider>
    </>
  );
}
