import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalBox = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 32px 24px;
  min-width: 300px;
  max-width: 90vw;
  box-shadow: 0 2px 16px rgba(0,0,0,0.15);
  text-align: center;
`;
const Title = styled.h3`
  margin-top: 0;
  color: #1976d2;
`;
const Message = styled.p`
  margin: 16px 0 24px 0;
  color: #222;
`;
const ButtonRow = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px 24px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1em;
  cursor: pointer;
  background: #1976d2;
  color: #fff;
  &:hover { background: #0d47a1; }
  &[data-variant="cancel"] {
    background: #eee;
    color: #333;
    &:hover { background: #ccc; }
  }
`;

const Modal = ({ open, title, message, onClose, onConfirm, confirmText = "OK", cancelText }) => {
  if (!open) return null;
  return (
    <Overlay>
      <ModalBox>
        {title && <Title>{title}</Title>}
        <Message>{message}</Message>
        <ButtonRow>
          {cancelText && <Button data-variant="cancel" onClick={onClose}>{cancelText}</Button>}
          <Button onClick={onConfirm}>{confirmText}</Button>
        </ButtonRow>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;
