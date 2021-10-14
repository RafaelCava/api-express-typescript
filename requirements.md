# Requerimentos Funcionais

[x] - Criar Usuário

[x] - Editar Usuário (Autenticado) [PUT]

[] - Editar Usuário (Autenticado) [PATCH]

[x] - Deletar Usuário (Autenticado)

[x] - Criar Produto

[x] - Editar Produto (Autenticado) [PUT]

[] - Editar Produto (Autenticado) [PATCH]

[x] - Deletar Produto (Autenticado)

[x] - Detalhar Dados do Usuário (Autenticado)

[x] - Listar produtos pelo Usuário (Autenticado)

[x] - Criar rota para autenticação de usuário

# Regras de aplicação
  - Um usuário só deve ter acesso aos dados referentes a sua conta
  - Um usuário só pode editar os dados da sua conta
  - Um usuário só pode deletar a sua conta
  - A senha do usuário tem que bater com o hash da senha salva no banco de dados