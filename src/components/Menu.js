import React from "react";

const Menu = () => {

  const components = [
    { name: "Home", page: 0 },
    { name: "Criação de Post", page: 1 },
    { name: "Sobre", page: 2 }
  ];

  return (
    <nav>
      <ul>
        <li>Item de Menu 1</li>
        <li>Item de Menu 2</li>
      </ul>
    </nav>
  );
};

export default Menu;
