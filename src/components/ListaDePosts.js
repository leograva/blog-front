import { useEffect, useState } from "react";
import apiUrl from "../config/apiUrl";
import { useNavigate } from "react-router-dom";

const ListaDePosts = () => {
  const [posts, setPosts] = useState([]);
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();


  const carregarPosts = () => {
    fetch(`${apiUrl}/posts`)
      .then((response) => response.json())
      .then((json) => setPosts(json.data.posts))
      .catch((error) => console.error("Erro ao buscar posts:", error));
  };

  useEffect(() => {
    carregarPosts();
  }, []);

  const handleBuscar = () => {
    fetch(`${apiUrl}/posts/search?q=${encodeURIComponent(busca)}`)
      .then((response) => response.json())
      .then((json) => setPosts(json.data.posts))
      .catch((error) => {
        setPosts([]);
        console.error("Erro ao buscar posts:", error);
      });
  };

  const handleLimpar = () => {
    setBusca("");
    carregarPosts();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar posts..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <button onClick={handleBuscar} style={{ marginLeft: 8 }}>Buscar</button>
  <button onClick={handleLimpar} style={{ marginLeft: 8 }}>Limpar</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3 onClick={() => navigate(`/leitura/${post.id}`)}>
              {post.title}
            </h3>
            <p>{post.content}</p>
            <p>{post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDePosts;
