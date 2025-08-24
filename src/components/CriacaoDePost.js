import React, { useState } from "react";

const CriacaoDePost = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://sua-api-url.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, conteudo }),
      });
      // Opcional: limpar campos ou mostrar mensagem de sucesso
      setTitulo("");
      setConteudo("");
    } catch (error) {
      // Trate o erro conforme necessário
      console.error("Erro ao cadastrar post:", error);
    }
  };

  return (
    <div>
      <h2>Criação de Postagem</h2>
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
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CriacaoDePost;