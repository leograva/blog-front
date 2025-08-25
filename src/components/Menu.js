import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";



const Nav = styled.nav`
  margin: 16px 0 24px 0;
`;
const List = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
  }
`;
const Item = styled.li``;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #1976d2;
  font-weight: 500;
  font-size: 1.1em;
  &:hover {
    text-decoration: underline;
    color: #0d47a1;
  }
`;

const LogoutButton = styled.button`
  background: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 18px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  margin-left: 12px;
  &:hover { background: #b71c1c; }
`;

const Menu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <Nav>
      <List>
        <Item><StyledLink to="/">Home</StyledLink></Item>
        <Item><StyledLink to="/criar">Criar Post</StyledLink></Item>
        <Item><StyledLink to="/admin">Administração</StyledLink></Item>
        {user && (
          <Item>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </Item>
        )}
      </List>
    </Nav>
  );
};

export default Menu;
