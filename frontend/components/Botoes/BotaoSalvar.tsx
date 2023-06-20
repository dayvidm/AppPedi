import { BotaoPadrao } from "./BotaoPadrao";

interface BotaoSalvarProps {
  loading?: boolean;
  text?: string;
}

export function BotaoSalvar({ loading, text = 'Salvar' }: BotaoSalvarProps) {
  return (
    <BotaoPadrao
      size={'large'}
      sx={{ minWidth: '130px' }}
      type={'submit'}
      loading={loading}
    >
      {text}
    </BotaoPadrao>
  );
}