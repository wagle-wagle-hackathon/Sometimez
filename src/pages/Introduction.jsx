import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FirstBackground from "../pics/FirstBackground.png";

export default function Introduction() {
  const [selectedGender, setSelectedGender] = useState(null);
  const navigate = useNavigate();
  const id = null;

  const handleClick = (gender) => {
    setSelectedGender(gender);
  };

  const handleNavigate = () => {
    navigate("/Question");
  };

  return (
    <Container>
      <ImgContainer src={FirstBackground} alt="Introduction" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>이름</NameDiv>
          <NameInput value={id}></NameInput>
          <Gender>성별</Gender>
          <GenderInputContainer>
            <GenderInput
              onClick={() => handleClick("male")}
              $isHighlighted={selectedGender === "male"}
            >
              남자
            </GenderInput>
            <GenderInput
              onClick={() => handleClick("female")}
              $isHighlighted={selectedGender === "female"}
              style={{ marginLeft: "15px" }}
            >
              여자
            </GenderInput>
          </GenderInputContainer>
          <AgeDiv>나이</AgeDiv>
          <AgeInput ></AgeInput>
        </ContainerBox>
      </BoxContainer>
      <FindBtn onClick={() => handleNavigate()}>
        좋아하는 이성을 잡아볼까?
      </FindBtn>
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
  width: 80%;
  height: 40%;
  border-radius: 30px;
  top: 30%;
  left: 10%;
  background-color: white;
  z-index: 1;
  flex-direction: column;
  color: #ac8623;
`;

const ContainerBox = styled.div`
  margin: 20px 0 0 40px;
`;
const NameDiv = styled.div`
  margin-left: 5px;
`;

const NameInput = styled.input`
  margin-top: 10px;
  padding: 0 0 0 15px;
  width: 70px;
  height: 45px;
  background-color: #dcdeee;
  border: none;
  border-radius: 30px;
  font-family: Pretendard;
  font-size: 20px;
`;

const GenderInputContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Gender = styled.div`
  margin: 30px 0 0 5px;
`;

const GenderInput = styled.div`
  display: flex;
  margin-top: 10px;
  background-color: ${(props) =>
    props.$isHighlighted ? "#FCEEE1" : "#DCDEEE"};
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 45px;
  font-weight: 500;
  border-radius: 20px;
  color: black;
  
  cursor: pointer;
`;

const AgeDiv = styled.div`
margin: 30px 0 0 5px;
`;

const AgeInput = styled.input`
  margin-top: 10px;
  background-color: #dcdeee;
  border: none;
  border-radius: 30px;
  width: 70px;
  height: 45px;
  padding: 0 0 0 15px;
  font-size: 20px;
  font-family: Pretendard;
`;

const FindBtn = styled.div`
  cursor: pointer;
  position: absolute;
  display: flex;
  width: 80%;
  height: 10%;
  border-radius: 30px;
  top: 85%;
  left: 10%;
  background-color: #fceee1;
  z-index: 1;
  color: black;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  opacity: 0.8;
  &:focus {
    opacity: 1;
  }
`;
