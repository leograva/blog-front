
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import apiUrl from "../config/apiUrl";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: 32px auto;
  background: #fafbfc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 32px 24px;
  @media (max-width: 600px) {
    padding: 8px 2vw;
    margin: 8px 0;
    min-width: 0;
  }
`;
const Title = styled.h2`
  color: #1976d2;
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
`;
const SubTitle = styled.h3`
  color: #333;
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  font-size: 1em;
  @media (max-width: 600px) {
    font-size: 0.92em;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
`;
const Th = styled.th`
  background: #1976d2;
  color: #fff;
  font-weight: 600;
  padding: 12px 8px;
  text-align: left;
`;
const Td = styled.td`
  padding: 10px 8px;
  border-bottom: 1px solid #eee;
  vertical-align: top;
  word-break: break-word;
  @media (max-width: 600px) {
    padding: 8px 4px;
    font-size: 0.97em;
  }
`;
const Tr = styled.tr`
  &:nth-child(even) { background: #f5f7fa; }
`;
const ActionRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  flex-wrap: nowrap;
  align-items: center;
`;
const ActionButton = styled.button`
  padding: 6px 12px;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 0.97em;
  cursor: pointer;
  min-width: 80px;
  &:hover { background: #0d47a1; }
  &[data-variant="danger"] {
    background: #d32f2f;
    &:hover { background: #b71c1c; }
  }
  @media (max-width: 600px) {
    width: auto;
    min-width: 0;
    font-size: 1em;
  }
`;

const PaginaAdministrativa = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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
    navigate(`/editar/${id}`);
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState(null);
  const [alertModal, setAlertModal] = useState({ open: false, message: "" });

  const handleExcluir = (id) => {
    setPostIdToDelete(id);
    setModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    setModalOpen(false);
    if (!postIdToDelete) return;
    try {
      const response = await fetch(`${apiUrl}/posts/${postIdToDelete}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setAlertModal({ open: true, message: "Post deletado com sucesso!" });
        listarPosts();
      } else {
        setAlertModal({ open: true, message: "Erro ao excluir o post." });
      }
    } catch (error) {
      setAlertModal({ open: true, message: "Erro ao excluir o post." });
    }
    setPostIdToDelete(null);
  };



  return (
    <Container>
      <Title>Página Administrativa</Title>
      <SubTitle>Lista de Postagens</SubTitle>
      <Table>
        <thead>
          <tr>
            <Th>Título</Th>
            <Th>Conteúdo</Th>
            <Th>Autor</Th>
            <Th>Ações</Th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <Tr key={post.id}>
              <Td>{post.title}</Td>
              <Td>{post.content}</Td>
              <Td>{post.author}</Td>
              <Td>
                <ActionRow>
                  <ActionButton onClick={() => handleEditar(post.id)}>Editar</ActionButton>
                  <ActionButton data-variant="danger" onClick={() => handleExcluir(post.id)}>
                    Excluir
                  </ActionButton>
                </ActionRow>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <Modal
        open={modalOpen}
        title="Confirmar exclusão"
        message="Tem certeza que deseja excluir esta postagem?"
        onClose={() => { setModalOpen(false); setPostIdToDelete(null); }}
        onConfirm={handleConfirmDelete}
        confirmText="Excluir"
        cancelText="Cancelar"
      />
      <Modal
        open={alertModal.open}
        title=""
        message={alertModal.message}
        onClose={() => setAlertModal({ open: false, message: "" })}
        onConfirm={() => setAlertModal({ open: false, message: "" })}
        confirmText="OK"
      />
    </Container>
  );
};

export default PaginaAdministrativa;
