import React from "react";
import styled from "styled-components";
import ResultPic from "../pics/Result.png";

export default function Result() {
  return (
    <Container>
      <ImgContainer src={ResultPic} alt="ResultPic" />
      <HeaderBox>결과보기</HeaderBox>
      <BoxContainer>
        <ContainerBox></ContainerBox>
        <BtnContainer>
          <BtnBox>처음으로</BtnBox>
          <BtnBox>공유하기</BtnBox>
        </BtnContainer>
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

const HeaderBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 10%;
  left: 30%;
  color: white;
  border-radius: 30px;
  background-color: white;
  color: black;
  height: 40px;
  width: 150px;
  flex-direction: column;
  cursor : pointer;
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
