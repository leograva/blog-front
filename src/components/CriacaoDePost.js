import React, { useState } from "react";
import apiUrl from "../config/apiUrl";

const CriacaoDePost = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: titulo, content: conteudo, author: autor }),
      });

      if (response.ok) {
        // Sucesso ao criar o post
        // Você pode exibir uma mensagem de sucesso aqui, se desejar
        alert('Post criado com sucesso!');
      } else {
        // Falha ao criar o post
        console.error("Falha ao criar o post:", await response.text());
      }
      
      // Opcional: limpar campos ou mostrar mensagem de sucesso
      setTitulo("");
      setConteudo("");
      setAutor("");

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
        <div>
          <label>Autor:</label>
          <input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
        </div>
        <button type="submit">Publicar</button>
      </form>
    </div>
  );
};

export default CriacaoDePost;