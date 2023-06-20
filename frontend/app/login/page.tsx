'use client'
import FormButton from "@/components/Botoes/BotaoPadrao";
import { FormContainer } from "@/components/FormContainer";
import FormInput from "@/components/FormInput";
import { Box, Grid, Link, Typography } from "@mui/material";
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
              <FormInput label="E-mail" register={rhfmethods.register} name="email"/>
              <FormInput label="Senha" register={rhfmethods.register} name="password"/>
              <FormButton label="Entrar" />
              <Typography fontWeight={200} mb={2}>
                <Link href="/login">
                  <span className="text-gray-800 hover:text-gray-600">Ainda não é registrado Clique Aqui</span>
                </Link>
              </Typography>
            </Grid>
          </FormContainer>
        </Box>
      </FormProvider>
    </>
  );
}
