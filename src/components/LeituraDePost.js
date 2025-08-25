
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import apiUrl from "../config/apiUrl";

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
    <div>
      <h2>{registro.title || registro.titulo}</h2>
      <p>{registro.content || registro.conteudo}</p>
      {registro.author && <p>Autor: {registro.author}</p>}
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default LeituraDePost;