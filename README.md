# Blog Frontend

Sistema de blog desenvolvido em React com capacidades administrativas.

## Funcionalidades

- Listagem e leitura pública de posts
- Área administrativa protegida
- Criação, edição e exclusão de posts
- Design responsivo para desktop e mobile
- Interface moderna com styled-components
- Sistema de autenticação com persistência em cookies

## Stack Tecnológica

- React 19.x com Hooks
- React Router DOM 7.x
- Styled Components 6.x
- Context API para gerenciamento de estado
- Docker & Nginx para deploy em produção

## Começando

### Pré-requisitos

- Node.js >= 14.x
- npm >= 6.x

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/leograva/blog-front.git
cd blog-front
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a URL da API:
Edite `src/config/apiUrl.js` para definir a URL do seu backend.

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000)

## Estrutura do Projeto

```
src/
  ├── components/       # Componentes React
  ├── contexts/        # Provedores de contexto
  ├── config/          # Arquivos de configuração
  ├── App.js          # Componente principal
  └── index.js        # Ponto de entrada
```

## Autenticação

- Credenciais para teste:
  - Usuário: professor
  - Senha: 1234
- Estado de autenticação persiste via cookies
- Rotas protegidas redirecionam para login

## Deploy com Docker

Build e execução com Docker:

```bash
docker-compose up -d --build
```

O app será servido na porta 3001 via Nginx.

## CI/CD

Workflow do GitHub Actions automaticamente:
- Realiza build da aplicação
- Executa testes
- Faz deploy para VPS de produção
- Gerencia containers Docker

## Demo

Vídeo disponível em: [Demo no YouTube](https://www.youtube.com/watch?v=cwSeV9_z3_g)
