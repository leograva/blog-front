import React from "react";
import { Link } from "react-router-dom";


const Menu = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/criar">Criar Post</Link></li>
      <li><Link to="/admin">Administração</Link></li>
    </ul>
  </nav>
);

export default Menu;
