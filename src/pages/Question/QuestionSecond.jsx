import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

/*---------------------------날씨----------------------*/
import Spring from "../../pics/weather/Spring.png";
import Summer from "../../pics/weather/Summer.png";
import Autumn from "../../pics/weather/Autumn.png";
import Winter from "../../pics/weather/Winter.png";
import WeatherAll from "../../pics/weather/WeatherAll.png";
import DotNum from "../../components/DotNum";

export default function QuestionSecond() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (weather) => {
    navigate("/QuestionThird");
  };

  const getWeatherPic = (weather) => {
    if (weather === 1) {
      return Spring;
    }
    if (weather === 2) {
      return Summer;
    }
    if (weather === 3) {
      return Autumn;
    }
    if (weather === 4) {
      return Winter;
    }
    if (weather === 5) {
      return WeatherAll;
    }
  };
  const weatherPicValue = getWeatherPic(location.state.weather);
  return (
    <Container>
      <ImgContainer src={weatherPicValue} alt="weatherPic" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>이성의 성격을 선택하세요</NameDiv>
          <BtnBox onClick={() => handleClick("cold")}>
            차갑고 도도한 이성
          </BtnBox>
          <BtnBox onClick={() => handleClick("warm")}>
            따뜻하고 부드러운 이성
          </BtnBox>
          <SkipBox>잘 모르겠어요</SkipBox>
          <IndexBox>
            <Index />
            <CurrentIndex />
            <Index />
            <Index />
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
  background-color: #DCDEEE;
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
const NameDiv = styled.div`
`;

const BtnBox = styled.div`
background-color : white;
  color: black;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-top : 30px;
  cursor: pointer;
`;

const SkipBox = styled.div`
  background-color: black;
  color : white;
  display: flex;
  margin-top : 20px;
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
