import { api } from '../services/apiClient';

/**
 * Formato padrão da resposta do backend
 */
export interface IResponsePadraoBack<T> {
  data: T;
  message: string;
  success: boolean;
}

interface ISalvarProps {
  url: string;
  dados: any;
  id?: number | string;
}

/**
 * Get
 * @param url
 * @param signal para cancelar a requisição
 * @param apenasDados para pegar apenas o .data da requisição, ignorando o status e a mensagem (para ser usado com o react query)
 */
export async function recuperar(
  url: string,
  signal?: AbortSignal,
  apenasDados = false
) {
  const { data } = await api.get(url, { signal });
  return apenasDados ? data.data ?? null : data;
}

/**
 * Post para cadastro ou edição
 * @param url
 * @param dados
 * @param id
 */
export async function salvar({ url, dados, id }: ISalvarProps) {
  if (id) {
    return await api.put(`${url}/${id}`, { ...dados });
  }

  return await api.post(url, { ...dados });
}

/**
 * Deletar
 * @param url
 */
export async function deletar(url: string) {
  return api.delete(url);
}

/**
 * Get pegando os dados da url
 * @param url
 * @param dados
 * @param signal
 * @param apenasDados
 */
export async function pesquisar(
  url: string,
  dados: any,
  signal?: AbortSignal,
  apenasDados = false
) {
  const params = new URLSearchParams(dados).toString();
  return recuperar(url + '?' + params, signal, apenasDados);
}
