import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FirstBackground from "../../pics/FirstBackground.png";

export default function Introduction() {
  const navigate = useNavigate();

  const handleClick = (weather) => {
    navigate("/QuestionSecond",{ state: { weather } });
  };

  return (
    <Container>
      <ImgContainer src={FirstBackground} alt="Introduction" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>상대방이 좋아하는 계절은?</NameDiv>
          <BtnContainer>
            <BtnBox onClick={() => handleClick(1)}>봄</BtnBox>
            <BtnBox onClick={() => handleClick(2)}>여름</BtnBox>
            <BtnBox onClick={() => handleClick(3)}>가을</BtnBox>
            <BtnBox onClick={() => handleClick(4)}>겨울</BtnBox>
          </BtnContainer>
          <SkipBox onClick={() => handleClick(5)}>잘 모르겠어요</SkipBox>
        </ContainerBox>
      </BoxContainer>
    </Container>
  );
}

const Container = styled.div`
  opacity: 0; /* Initial opacity set to 0 */
  transition: opacity 1s ease; /* Add a transition effect */
  animation: fadeIn 1s ease forwards; /* Add a fade-in animation */
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
  font-size: 20px;
  font-weight: 700;
  font-family: Pretendard;
`;

const ImgContainer = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 80%;
  height: 40%;
  border-radius: 30px;
  top: 50%;
  left: 10%;
  background-color: #dcdeee;
  opacity: 0.9;
  z-index: 1;
  flex-direction: column;
  color: black;
`;

const ContainerBox = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const NameDiv = styled.div``;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20%;
  column-gap : 5%;
  margin-top: 30px;
`;

const BtnBox = styled.div`
  background-color: white;
  color: black;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 45px;
`;

const SkipBox = styled.div`
  background-color: black;
  color : white;
  display: flex;
  margin-top : 60px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 30px;
  font-size : 14px;
  cursor: pointer;
`;