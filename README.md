
# Blog Front

Este projeto é o frontend de um sistema de blog, desenvolvido em React.

## Funcionalidades

- Listagem de posts
- Leitura de post individual
- Criação, edição e exclusão de posts (área administrativa)
- Interface moderna e responsiva

## Instalação e uso

1. Clone o repositório:
	```bash
	git clone https://github.com/leograva/blog-front.git
	cd blog-front
	```
2. Instale as dependências:
	```bash
	npm install
	```
3. Inicie o servidor de desenvolvimento:
	```bash
	npm start
	```
	O app estará disponível em [http://localhost:3000](http://localhost:3000).

## Scripts disponíveis

- `npm start` — Inicia o app em modo desenvolvimento
- `npm test` — Executa os testes
- `npm run build` — Gera a versão de produção


## Documentação Técnica

### Setup Inicial

1. **Pré-requisitos:**
	 - Node.js >= 14.x
	 - npm >= 6.x
2. **Instalação:**
	 - Clone o repositório e instale as dependências:
		 ```bash
		 git clone https://github.com/leograva/blog-front.git
		 cd blog-front
		 npm install
		 ```
3. **Configuração de ambiente:**
	 - O arquivo `src/config/apiUrl.js` define a URL base da API. Ajuste conforme necessário para apontar para o backend desejado.
4. **Execução:**
	 - Para rodar localmente:
		 ```bash
		 npm start
		 ```
	 - O app estará disponível em [http://localhost:3000](http://localhost:3000).

### Arquitetura da Aplicação

- **React + Hooks:** Toda a lógica de UI e estado é baseada em componentes funcionais e hooks.
- **React Router DOM:** Gerencia as rotas públicas e protegidas (administração, edição, criação de posts).
- **Styled-components:** Todo o layout e responsividade são feitos com styled-components, incluindo temas e estilos globais.
- **Context API:**
	- `AuthContext` gerencia autenticação, login/logout e persistência via cookies.
- **Componentização:**
	- `src/components/` contém todos os componentes reutilizáveis, incluindo:
		- `Menu`: navegação principal, com botão de logout para usuários autenticados.
		- `Modal`: modal reutilizável para alertas e confirmações.
		- `ListaDePosts`, `LeituraDePost`, `CriacaoDePost`, `EdicaoDePost`: telas principais do blog.
- **API:**
	- Todas as requisições usam fetch apontando para a URL definida em `apiUrl.js`.
- **Responsividade:**
	- O layout se adapta para desktop e mobile, com formulários otimizados para toque e navegação.

### Guia de Uso

1. **Acesse o app:**  
    Abra [http://localhost:3000](http://localhost:3000) no navegador após iniciar o servidor de desenvolvimento.

2. **Navegação pública:**  
    - Visualize a lista de posts na página inicial.
    - Clique em um post para ler seu conteúdo completo.

3. **Área administrativa:**  
    - Clique em "Login" no menu para acessar as funcionalidades administrativas.
    - Após autenticação, utilize as opções para criar, editar ou excluir posts.
    - O botão de logout ficará disponível no menu.

4. **Criação de post:**  
    - Clique em "Novo Post" na área administrativa.
    - Preencha o formulário e envie para publicar um novo post.

5. **Edição e exclusão:**  
    - Na lista de posts administrativos, utilize os botões de editar ou excluir ao lado de cada post.
    - A exclusão exige confirmação em um modal.

6. **Responsividade:**  
    - O app se adapta automaticamente para uso em dispositivos móveis e desktops.

7. **Customização:**  
    - Para alterar temas ou estilos, edite os arquivos de styled-components ou os estilos globais em `App.js`.
    - Para mudar a URL da API, edite `src/config/apiUrl.js`.

#### Fluxo do Usuário

1. **Visualização de posts:**
	 - Qualquer usuário pode listar e ler posts.
2. **Área administrativa:**
	 - Professores/autores devem fazer login para acessar as rotas de criação, edição e administração de posts.
	 - Após login, o menu exibe o botão de logout.
3. **Criação/Edição/Exclusão:**
	 - Formulários modernos e responsivos.
	 - Modais informativos e de confirmação substituem alerts nativos.
	 - Exclusão de posts exige confirmação via modal.

#### Customização

- Para alterar o tema ou estilos, edite os arquivos de styled-components em cada componente ou os estilos globais em `App.js`.
- Para apontar para outra API, edite `src/config/apiUrl.js`.

#### Testes

- Para rodar os testes:
	```bash
	npm test
	```

---

Desenvolvido por [leograva](https://github.com/leograva)