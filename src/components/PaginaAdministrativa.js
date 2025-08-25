import React, { useState, useEffect } from "react";
import apiUrl from "../config/apiUrl";

const PaginaAdministrativa = () => {
  const [posts, setPosts] = useState([]);

  function listarPosts(){
    fetch(`${apiUrl}/posts`)
      .then((response) => response.json())
      .then((json) => {
        if (json && json.data && Array.isArray(json.data.posts)) {
          setPosts(json.data.posts);
        } else {
          setPosts([]);
          console.error("Estrutura de resposta inesperada:", json);
        }
      })
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }

  useEffect(() => {
   listarPosts();
  }, []);
  
  const handleEditar = (id) => {
    window.location.href = `/editar/${id}`;
  };

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta postagem?")) {
      alert(id);
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div>
      <h2>Página Administrativa</h2>
      <h3>Lista de Postagens</h3>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Conteúdo</th>
            <th>Autor</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.author}</td>
              <td>
                <button onClick={() => handleEditar(post.id)}>Editar</button>
                <button
                  onClick={() => handleExcluir(post.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaginaAdministrativa;
