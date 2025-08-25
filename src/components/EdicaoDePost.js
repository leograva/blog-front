import React, { useState, useEffect } from "react";
import apiUrl from "../config/apiUrl";
import { useParams } from "react-router-dom";

const EdicaoDePost = ({ post, onSave }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState(post?.titulo || "");
  const [conteudo, setConteudo] = useState(post?.conteudo || "");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`${apiUrl}/posts/${id}`)
      .then(res => res.json())
      .then(json => {
        const p = json.data?.post || json.post || json;
        setTitulo(p.title || "");
        setConteudo(p.content || "");
      })
      .finally(() => setLoading(false));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${apiUrl}/posts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, conteudo }),
    });
    onSave && onSave();
  };

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      <h2>Edição de Postagem</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label>Conteúdo:</label>
          <textarea
            value={conteudo}
            onChange={e => setConteudo(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EdicaoDePost;
