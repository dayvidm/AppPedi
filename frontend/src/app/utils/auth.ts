// auth.ts

// Função para verificar se o usuário está autenticado
export function isAuthenticated(): boolean {
    if (typeof window === 'undefined') {
      // No lado do servidor, não há acesso ao localStorage
      return false;
    }
  
    // Verifique se o token está armazenado no localStorage
    const token = localStorage.getItem('token');
  
    // Se o token existir e for válido, o usuário está autenticado
    if (token) {
      // Aqui você pode adicionar a lógica para verificar a validade do token, por exemplo, fazendo uma chamada ao backend para validar o token JWT.
      // Se o token for válido, retorne true
      // Caso contrário, retorne false
      return true;
    }
  
    // Se o token não existir ou for inválido, o usuário não está autenticado
    return false;
  }
  