import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width : 55%;
  display : flex;
  align-items: center;
  text-align: center;
  flex-direction : column;
  z-index: 2;
  font-size : 18px;
  
`;

const Btn =styled.div`
margin-top : 10px;
border-radius : 10px;
width : 30%;
height : 20px;
background-color : #DCDCEE;
`

const Modal = ({ onClose }) => {
  return (
    <ModalContainer>
      <p>사실 정답은 없는 것 같아요.</p>
      <p>중요한건 본인의 마음가짐</p>
      <p>아닐까요?</p>
      <Btn onClick={onClose}>닫기</Btn>
    </ModalContainer>
  );
};

export default Modal;