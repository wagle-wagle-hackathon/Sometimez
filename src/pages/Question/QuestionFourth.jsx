import React from "react";
import styled from "styled-components";

/*-----------------------Q4----------------------------------*/
/*-----------------------Men---------------------------------*/
import BusMale from "../../pics/male/Q4/BusMale.png";
import { useNavigate } from "react-router-dom";
// import GoodMale from "../../pics/male/Q4/GoodMale.png";
// import HipMale from "../../pics/male/Q4/HipMale.png";
// import VintageMale from "../../pics/male/Q4/VintageMale.png";
// /*-----------------------Women-------------------------------*/
// import BusFemale from "../../pics/male/Q4/BusFemale.png";
// import GoodFemale from "../../pics/male/Q4/GoodFemale.png";
// import HipFemale from "../../pics/male/Q4/HipFemale.png";
// import VintageFemale from "../../pics/male/Q4/VintageFemale.png";

const optionsList = [
  { label: "독서", value: "spring" },
  { label: "운동", value: "summer" },
  { label: "공부", value: "autumn" },
  { label: "영화 감상", value: "winter" },
];

export default function QuestionFourth() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Pending");
  };

  return (
    <Container>
      <ImgContainer src={BusMale} alt="weatherPic" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>이성의 취미를 선택하세요</NameDiv>
          <BtnContainer>
            {optionsList.map((option) => (
              <BtnBox key={option.value} onClick={() => handleClick(option.value)}>
                {option.label}
              </BtnBox>
            ))}
          </BtnContainer>
          <SkipBox>잘 모르겠어요</SkipBox>
          <IndexBox>
            <Index />
            <Index />
            <Index />
            <CurrentIndex />
            <Index />
          </IndexBox>
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
  
  cursor: pointer;
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

const IndexBox = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
  border-radius: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
`;

const CurrentIndex = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid black;
  border-radius: 100%;
  background-color: #fff;
  text-align: center;

`;

const Index = styled.div`
  width: 12px;
  height: 12px;
  border: 1px solid black;
  border-radius: 100%;
  background-color: #D9D9D9;
`;
