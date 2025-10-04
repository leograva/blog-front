
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

### Pré-requisitos

- **Node.js** versão 14.x ou superior
- **npm** versão 6.x ou superior

### Instalação e Configuração

1. **Clone o repositório e instale as dependências:**
	```bash
	git clone https://github.com/leograva/blog-front.git
	cd blog-front
	npm install
	```
2. **Configuração de ambiente:**
	- Edite `src/config/apiUrl.js` para definir a URL base da API conforme seu backend.

3. **Execução local:**
	```bash
	npm start
	```
	O app estará disponível em [http://localhost:3000](http://localhost:3000).

### Estrutura e Tecnologias

- **React com Hooks:** Componentização funcional e gerenciamento de estado.
- **React Router DOM:** Rotas públicas e protegidas.
- **Styled-components:** Temas, estilos globais e responsividade.
- **Context API:**  
	- `AuthContext` para autenticação e persistência via cookies.
- **Componentes reutilizáveis:**  
	- Localizados em `src/components/`:
		- `Menu`, `Modal`, `ListaDePosts`, `LeituraDePost`, `CriacaoDePost`, `EdicaoDePost`.
- **API:**  
	- Requisições via fetch usando a URL definida em `apiUrl.js`.
- **Responsividade:**  
	- Layout adaptável para desktop e mobile.

### Guia de Uso

1. **Acesse o app:**  
	Abra [http://localhost:3000](http://localhost:3000) após iniciar o servidor.

2. **Funcionalidades públicas:**  
	- Listar posts e ler conteúdo completo.

3. **Área administrativa:**  
	- Login para criar, editar ou excluir posts.
	- Botão de logout disponível após autenticação.

4. **Gerenciamento de posts:**  
	- Crie novos posts via formulário.
	- Edite ou exclua posts na lista administrativa.
	- Exclusão exige confirmação via modal.

5. **Customização:**  
	- Altere temas ou estilos em arquivos de styled-components ou em `App.js`.
	- Modifique a URL da API em `src/config/apiUrl.js`.

### Fluxo do Usuário

- **Visualização:**  
	- Qualquer usuário pode listar e ler posts.
- **Administração:**  
	- Usuários autenticados acessam rotas administrativas.
	- Formulários modernos e modais para confirmação de ações.

