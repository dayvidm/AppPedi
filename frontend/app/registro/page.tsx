'use client'
import { BotaoSalvar } from "@/components/Botoes/BotaoSalvar";
import { FormContainer } from "@/components/FormContainer";
import FormInput from "@/components/FormInput";
import { salvar } from "@/hooks/useRequestFunction";
import { useToast } from "@/hooks/useToast";
import { Box, Grid } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { REGISTRO_API_REQUEST } from "./registroTypes";

interface ICadastroUsuarioForm {
    name: string,
    email: string,
    password: string
}

export default function register() {
    const rhfmethods = useForm<ICadastroUsuarioForm>();
    const [loading, setLoading] = useState(false);
    const {toastError, toastSuccess} = useToast();
    function handleRegistrarUsuario(values: ICadastroUsuarioForm) {
        setLoading(true);


        salvar({
            url: REGISTRO_API_REQUEST,
            dados: values
        })
            .then(response => {
                console.log(response);
                // if (response.data.data[0].no_bancada === 0) {
                //     toastError(
                //         'Já existe outro cadastro de Bancada com este mesmo nome, não sendo possível mudar.'
                //     );
                //     return;
                // }
                // if (response.data.co_bancada === 0) {
                //     toastError(
                //         'Não foi possível atualizar essa bancada, pois ela não existe.'
                //     );
                //     navigate(PAGINA_INICIAL_BANCADA);
                // }
                // const dados = response.data.data[0];
                // const novaBancada = {
                //     ...dados,
                //     no_parlamentar: values.co_parlamentar.desc,
                //     st_ativo: 'S',
                // };
                // updateReactQueryCache(
                //     bancadaAnosQueryKey,
                //     {
                //         cod: dados.nu_ano,
                //         desc: dados.nu_ano,
                //     },
                //     'nu_ano'
                // );
                // updateReactQueryCache(
                //     [bancadaQueryKeyBase, '' + dados.nu_ano],
                //     novaBancada,
                //     'co_bancada'
                // );
                // queryClient.invalidateQueries([bancadaQueryKeyBase, '' + dados.nu_ano]);
                // if (coBancada) {
                //     toastSuccess('Alteração da Bancada realizada com sucesso');
                // } else {
                //     toastSuccess('Bancada Cadastrada com sucesso');
                // }

                // navigate(PAGINA_INICIAL_BANCADA);
            })
            .catch((error: AxiosError<any>) => {
                toastError('Houve um erro ao cadastrar o usuario.');
            })
            .finally(() => {
                setLoading(false);
            });
    }
    return (
        <>
            <FormProvider {...rhfmethods}>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <FormContainer onSubmitHandler={rhfmethods.handleSubmit(handleRegistrarUsuario)}>
                        <Grid xs={2}>
                            <FormInput name="name" label="Nome Completo" register={rhfmethods.register} />
                            <FormInput name="email" label="E-mail" register={rhfmethods.register} />
                            <FormInput name="password" label="Senha" register={rhfmethods.register} />
                            <BotaoSalvar text={'gravar'} loading={loading} />
                        </Grid>
                    </FormContainer>
                </Box>
            </FormProvider>
        </>
    );
}
