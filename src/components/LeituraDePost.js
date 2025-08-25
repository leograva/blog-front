

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiUrl from "../config/apiUrl";
import styled from "styled-components";

const Container = styled.div`
  max-width: 700px;
  margin: 32px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 32px 24px;
  @media (max-width: 600px) {
    padding: 16px 4px;
  }
`;
const Title = styled.h2`
  color: #1976d2;
  font-size: 2.2em;
  font-weight: 700;
  margin-bottom: 18px;
  text-align: center;
  letter-spacing: 1px;
`;
const Content = styled.p`
  font-size: 1.15em;
  color: #222;
  margin-bottom: 18px;
  line-height: 1.7;
  white-space: pre-line;
`;
const Author = styled.p`
  color: #888;
  font-size: 1em;
  margin-bottom: 24px;
  text-align: right;
  font-style: italic;
`;
const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  color: #1976d2;
  font-weight: 500;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    color: #0d47a1;
  }
`;

const LeituraDePost = () => {
  const { id } = useParams();
  const [registro, setRegistro] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/posts/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar o post");
        }
        const json = await response.json();

        // Tenta acessar o post em diferentes formatos de resposta
        let post = null;
        if (json.data && json.data.post) {
          post = json.data.post;
        } else if (json.post) {
          post = json.post;
        } else {
          post = json;
        }

        setRegistro(post);
      } catch (error) {
        setRegistro(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (!registro) return <div>Nenhum registro encontrado.</div>;


  return (
    <Container>
      <Title>{registro.title || registro.titulo}</Title>
      <Content>{registro.content || registro.conteudo}</Content>
      {registro.author && <Author>Autor: {registro.author}</Author>}
      <BackLink to="/">Voltar</BackLink>
    </Container>
  );
};

export default LeituraDePost;