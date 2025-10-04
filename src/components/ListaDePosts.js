import { useEffect, useState } from "react";
import apiUrl from "../config/apiUrl";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background: #fafbfc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  @media (max-width: 600px) {
    padding: 8px 2vw;
    min-width: 0;
  }
`;
const SearchRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 4px;
  }
`;
const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
`;
const Button = styled.button`
  padding: 8px 16px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: #0d47a1;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  background: #fff;
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 12px 16px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  @media (max-width: 600px) {
    padding: 8px 8px;
  }
`;
const Title = styled.h3`
  margin: 0 0 8px 0;
  color: #1976d2;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Author = styled.p`
  color: #888;
  font-size: 0.95em;
  margin: 0;
`;


const POSTS_PER_PAGE = 4;

const ListaDePosts = () => {
  const [posts, setPosts] = useState([]);
  const [busca, setBusca] = useState("");
  const [pagina, setPagina] = useState(1);
  const navigate = useNavigate();

  const carregarPosts = () => {
    fetch(`${apiUrl}/posts`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.data.posts);
        setPagina(1);
      })
      .catch((error) => console.error("Erro ao buscar posts:", error));
  };

  useEffect(() => {
    carregarPosts();
  }, []);

  const handleBuscar = () => {
    fetch(`${apiUrl}/posts/search?q=${encodeURIComponent(busca)}`)
      .then((response) => response.json())
      .then((json) => {
        setPosts(json.data.posts);
        setPagina(1);
      })
      .catch((error) => {
        setPosts([]);
        setPagina(1);
        console.error("Erro ao buscar posts:", error);
      });
  };

  const handleLimpar = () => {
    setBusca("");
    carregarPosts();
  };

  // Paginação
  const totalPaginas = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIdx = (pagina - 1) * POSTS_PER_PAGE;
  const endIdx = startIdx + POSTS_PER_PAGE;
  const postsPagina = posts.slice(startIdx, endIdx);

  const handleAnterior = () => setPagina((p) => Math.max(1, p - 1));
  const handleProxima = () => setPagina((p) => Math.min(totalPaginas, p + 1));

  return (
    <Container>
      <SearchRow>
        <Input
          type="text"
          placeholder="Buscar posts..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <Button onClick={handleBuscar}>Buscar</Button>
        <Button onClick={handleLimpar}>Limpar</Button>
      </SearchRow>
      <List>
        {postsPagina.map((post) => (
          <ListItem key={post.id}>
            <Title onClick={() => navigate(`/leitura/+`)}>
              {post.title}
            </Title>
            <p>{post.content.slice(0, 100)}</p>
            <Author>{post.author}</Author>
          </ListItem>
        ))}
      </List>
      {totalPaginas > 1 && (
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 16 }}>
          <Button onClick={handleAnterior} disabled={pagina === 1}>Anterior</Button>
          <span style={{ alignSelf: 'center' }}>Página {pagina} de {totalPaginas}</span>
          <Button onClick={handleProxima} disabled={pagina === totalPaginas}>Próxima</Button>
        </div>
      )}
    </Container>
  );
};

export default ListaDePosts;
