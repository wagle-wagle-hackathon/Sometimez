import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ResultPic from "../pics/Result.png";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import axios from "axios"; // Axios 추가

export default function Result() {
  const navigate = useNavigate();
  const [advice, setAdvice] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [name, setName] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handletoMain = () => {
    navigate("/");
  };
  const handleCopy = () => {
    const currentURL = window.location.href;

    // Check if the document is focused before performing clipboard operations
    if (document.hasFocus()) {
      alert("복사 성공했습니다");

      // 복사 로직 추가 (예시)
      navigator.clipboard
        .writeText(currentURL)
        .then(() => {
          // Success
        })
        .catch((error) => {
          console.error("Clipboard write failed:", error);
        });
    } else {
      // Document is not focused, provide a user-friendly message or handle accordingly
      alert("복사 실패: 문서가 포커스를 잃었습니다.");
    }
  };

  useEffect(() => {
    // API 호출
    axios
      .get("http://dev.tmp-domain-service.shop/result", {
        params: {
          userId: 1,
          resultId: token,
        },
      })
      .then((response) => {
        const advice = response.data.result.advices; // 여기서는 첫 번째 질문에 대한 응답을 받았다고 가정합니다.
        setName(response.data.result.name);
        setAdvice(advice);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, [token]);

  return (
    <Container>
      <Overlay isModalOpen={isModalOpen} />
      <ImgContainer src={ResultPic} alt="ResultPic" />
      <HeaderBox onClick={openModal}>결과보기</HeaderBox>
      <BoxContainer>
        <ContainerBox>
          <Header>당신이 {name}을(를) 사로잡을 수 있는 도움말</Header>
        </ContainerBox>
        <BodyContainer>
          {advice &&
            advice.map((item, index) => <Body key={index}>- {item}</Body>)}
        </BodyContainer>
        <BtnContainer>
          <BtnBox onClick={() => handletoMain()}>처음으로</BtnBox>
          <CopyToClipboard text={window.location.href} onCopy={handleCopy}>
            <BtnBox>공유하기</BtnBox>
          </CopyToClipboard>
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
  display: flex;
  justify-content: center;
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
  margin-top: 40px;
  display: flex;
  text-align: center;
  color: #877549;
  font-size: 26px;
`;

const BodyContainer = styled.ul`
  margin: 60px 0 0 20px;
  font-size: 18px;
`;

const Body = styled.li`
  margin-top: 20px;
  display: flex;
  font-weight: 500;
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
