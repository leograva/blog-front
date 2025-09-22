import React, { useState, useEffect } from "react";
import apiUrl from "../config/apiUrl";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";

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

const EdicaoDePost = ({ post, onSave }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`${apiUrl}/posts/${id}`)
      .then(res => res.json())
      .then(json => {
        const p = json.data?.post || json.post || json;
        setTitulo(prev => prev || p.title || "");
        setConteudo(prev => prev || p.content || "");
        setAutor(prev => prev || p.author || "");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  return (
    <div>
      <Title>Edição de Postagem</Title>
      <Form
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await fetch(`${apiUrl}/posts/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({"title": titulo, "content": conteudo,"author": autor }),
          });
          if (response.ok) {
            setModalOpen(true);
          }
            onSave && onSave();
          }}
          >
          <div>
            <Label>Título:</Label>
            <Input
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
            readOnly={true}
            />
          </div>
          <div>
            <Label>Conteúdo:</Label>
            <Textarea
            value={conteudo}
            onChange={e => setConteudo(e.target.value)}
            required
            />
          </div>
          <div>
            <Label>Autor:</Label>
            <Input
            type="text"
            value={autor}
            onChange={e => setAutor(e.target.value)}
            required
            />
          </div>
          <Button type="submit">Salvar</Button>
          </Form>
          <Modal
          open={modalOpen}
          title="Sucesso!"
          message="Post editado com sucesso!"
          onClose={() => {
          setModalOpen(false);
          navigate("/admin");
        }}
        onConfirm={() => {
          setModalOpen(false);
          navigate("/admin");
        }}
        confirmText="OK"
      />
    </div>
  );
}

export default EdicaoDePost;
