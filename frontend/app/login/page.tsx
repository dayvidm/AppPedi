'use client'
import FormButton from "@/components/FormButton";
import { FormContainer } from "@/components/FormContainer";
import FormInput from "@/components/FormInput";
import { Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

export default function login() {
  const rhfmethods = useForm();
  return (
    <>
      <FormProvider {...rhfmethods}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <FormContainer >
            <FormInput label="E-mail" register={rhfmethods.register} />
            <FormInput label="Senha" register={rhfmethods.register} />
            <FormButton label="Entrar" />
          </FormContainer>
        </Box>
      </FormProvider>
    </>
  );
}
