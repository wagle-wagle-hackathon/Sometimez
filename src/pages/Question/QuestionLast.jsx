import React from "react";
import LastPagePic from "../../pics/LastPagePic.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function QuestionLast() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Result");
  };
  return (
    <Container>
      <ImgContainer src={LastPagePic} alt="LastPagePic" />
      <HeaderBox>
        <HeaderTitle>마지막 관문!</HeaderTitle>
        <HeaderBody>이성에게 접근하기 위해 어떻게 해야할까?</HeaderBody>
      </HeaderBox>
      <BoxContainer>
        <ContainerBox>
          <BtnBox onClick={() => handleClick()}>
            밀당하며 집안에서 연락만 한다.
          </BtnBox>
          <BtnBox onClick={() => handleClick()}>
            대쉬하며 적극적으로 들이댄다.
          </BtnBox>
          <BtnBox onClick={() => handleClick()}>
            연락은 절대 보지 않고 전화한다.
          </BtnBox>
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

const HeaderBox = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  margin-left: 5%;
  flex-direction: column;
  z-index: 1;
  color: white;
`;

const HeaderTitle = styled.div`
  display: flex;
  text-align: center;
  margin-top: 10%;
`;

const HeaderBody = styled.div`
  display: flex;
  text-align : center;
  margin-top: 10%;
  max-width: 60%;
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

const BtnBox = styled.div`
  background-color: white;
  color: black;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 110%;
  height: 50px;
  margin-top: 40px;
  
  cursor: pointer;
`;
