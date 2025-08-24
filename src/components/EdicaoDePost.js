import React, { useState } from "react";

const EdicaoDePost = ({ post, onSave }) => {
  const [titulo, setTitulo] = useState(post?.titulo || "");
  const [conteudo, setConteudo] = useState(post?.conteudo || "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://sua-api.com/posts/${post.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, conteudo }),
    });
    if (onSave) onSave();
  };

  return (
    <div>
      <h2>Edição de Postagem</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label>Conteúdo:</label>
          <textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default EdicaoDePost;