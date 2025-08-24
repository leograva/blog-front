import React, { useEffect, useState } from "react";

const ListaDePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Substitua a URL abaixo pela URL real da sua API
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Postagens</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDePosts;
