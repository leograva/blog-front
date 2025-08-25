
import React, { useState } from "react";
import apiUrl from "../config/apiUrl";
import Modal from "./Modal";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: #fafbfc;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
  max-width: 500px;
  margin: 0 auto;
`;
const Label = styled.label`
  font-weight: 500;
  margin-bottom: 4px;
`;
const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
`;
const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
  width: 100%;
  min-height: 100px;
  resize: vertical;
`;
const Button = styled.button`
  padding: 12px 0;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1em;
  cursor: pointer;
  margin-top: 8px;
  &:hover {
    background: #0d47a1;
  }
`;
const Title = styled.h2`
  text-align: center;
  color: #1976d2;
  margin-bottom: 24px;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 1px;
`;

const CriacaoDePost = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
        setModalOpen(true);
      } else {
        // Falha ao criar o post
        console.error("Falha ao criar o post:", await response.text());
      }

    } catch (error) {
      // Trate o erro conforme necessário
      console.error("Erro ao cadastrar post:", error);
    }
  };

  return (
    <div>
      <Title>Criação de Postagem</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label>Título:</Label>
          <Input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>Conteúdo:</Label>
          <Textarea
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            required
          />
        </div>
        <div>
          <Label>Autor:</Label>
          <Input
            type="text"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            required
          />
        </div>
        <Button type="submit">Publicar</Button>
      </Form>
      <Modal
        open={modalOpen}
        title="Sucesso!"
        message="Post criado com sucesso!"
        onClose={() => {
          setModalOpen(false);
          setTitulo("");
          setConteudo("");
          setAutor("");
        }}
        onConfirm={() => {
          setModalOpen(false);
          setTitulo("");
          setConteudo("");
          setAutor("");
        }}
        confirmText="OK"
      />
    </div>
  );
};

export default CriacaoDePost;