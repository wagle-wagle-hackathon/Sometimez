import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
/*-----------------------Q3----------------------------------*/
/*-----------------------Men---------------------------------*/
import ColdMale from "../../pics/male/Q3/ColdMale.png";
// import WarmMale from "../../pics/male/Q3/WarmMale.png";
// /*-----------------------Women-------------------------------*/
// import ColdFemale from "../../pics/female/Q3/ColdFemale.png";
// import WarmFemale from "../../pics/female/Q3/WarmFemale.png";

const optionsList = [
  { label: "빈티지", value: "spring" },
  { label: "힙한", value: "summer" },
  { label: "청순한", value: "autumn" },
  { label: "비즈니스", value: "winter" },
];

export default function QuestionThird() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/QuestionFourth");
  };
  return (
    <Container>
      <ImgContainer src={ColdMale} alt="weatherPic" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>상대방이 좋아하는 계절은</NameDiv>
          <BtnContainer>
            {optionsList.map((option) => (
              <BtnBox
                key={option.value}
                onClick={() => handleClick(option.value)}
              >
                {option.label}
              </BtnBox>
            ))}
          </BtnContainer>
          <SkipBox>잘 모르겠어요</SkipBox>
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
  column-gap: 5%;
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
  cursor: pointer;
`;
const SkipBox = styled.div`
  background-color: black;
  color: white;
  display: flex;
  margin-top: 60px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 30px;
  font-size: 14px;
  cursor: pointer;
`;
