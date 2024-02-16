import React, { useState } from "react";
import styled from "styled-components";
import ResultPic from "../pics/Result.png";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";

export default function Result() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handletoMain = () => {
    navigate("/");
  };

  return (
    <Container>
      <Overlay isModalOpen={isModalOpen} />
      <ImgContainer src={ResultPic} alt="ResultPic" />
      <HeaderBox onClick={openModal}>결과보기</HeaderBox>
      <BoxContainer>
        <ContainerBox>
          <Header>당신이 이성을 사로잡을 수 있는 도움말</Header>
        </ContainerBox>
        <BodyContainer>
          <Body>- 상대방이 여름을 좋아한다면, 여름을 좋아하는 사람들은 자연적으로 해변이나 수영 등 여름의 자연을 즐기는 것을 선호할 수 있습니다.</Body>
          <Body>- 상대방이 여름을 좋아한다면, 여름을 좋아하는 사람들은 자연적으로 해변이나 수영 등 여름의 자연을 즐기는 것을 선호할 수 있습니다.</Body>
          <Body>- 상대방이 여름을 좋아한다면, 여름을 좋아하는 사람들은 자연적으로 해변이나 수영 등 여름의 자연을 즐기는 것을 선호할 수 있습니다.</Body>
          <Body>- 상대방이 여름을 좋아한다면, 여름을 좋아하는 사람들은 자연적으로 해변이나 수영 등 여름의 자연을 즐기는 것을 선호할 수 있습니다.</Body>
        </BodyContainer>
        <BtnContainer>
          <BtnBox onClick={() => handletoMain()}>처음으로</BtnBox>
          <BtnBox>공유하기</BtnBox>
        </BtnContainer>
      </BoxContainer>
      {isModalOpen && <Modal onClose={closeModal} />}
    </Container>
  );
}

const Container = styled.div`
  opacity: 0;
  transition: opacity 1s ease;
  animation: fadeIn 1s ease forwards;
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  font-size: 20px;
  font-weight: 700;
  font-family: Pretendard;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: ${({ isModalOpen }) => (isModalOpen ? 0.5 : 0)};
  pointer-events: ${({ isModalOpen }) => (isModalOpen ? "auto" : "none")};
  transition: opacity 0.5s ease;
  z-index: 2;
`;

const ImgContainer = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const HeaderBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 10%;
  left: 32%;
  color: white;
  border-radius: 30px;
  background-color: white;
  color: black;
  height: 40px;
  width: 150px;
  flex-direction: column;
  cursor: pointer;
`;

const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 80%;
  height: 70%;
  border-radius: 30px;
  top: 20%;
  left: 10%;
  background-color: #dcdeee;
  opacity: 0.8;
  z-index: 1;
  flex-direction: column;
  color: black;
`;

const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  margin-top: 20px;
  display: flex;
  text-align: center;
  color: #877549;
  font-size: 26px;
`;

const BodyContainer = styled.ul`
  margin: 60px 0 0 20px;
  font-size : 18px;
`;

const Body = styled.li`
  margin-top: 20px;
  display: flex;
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 95%;
  gap: 20px;
`;

const BtnBox = styled.div`
  background-color: white;
  color: black;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 50px;
  margin-top: 40px;
  border: 3px solid black;
  cursor: pointer;
`;
