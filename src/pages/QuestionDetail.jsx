import React from "react";
import styled from "styled-components";
import { useLocation} from "react-router-dom";
import Spring from "../pics/weather/Spring.png";
import Summer from "../pics/weather/Summer.png"; 
import Autumn from "../pics/weather/Autumn.png"; 
import Winter from "../pics/weather/Winter.png"; 


export default function QuestionDetail() {
  const location = useLocation();

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
  }
    const weatherPicValue = getWeatherPic(location.state.weather);

  return (
    <Container>
      <ImgContainer src={weatherPicValue} alt="Introduction" />

    </Container>
  );
}

const Container = styled.div`
  font-size: 20px;
  font-weight: 500;
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
  top: 50%;
  left: 10%;
  background-color: white;
  opacity : 0.9;
  z-index: 1;
  flex-direction: column;
  color: black;
`;

const ContainerBox = styled.div`
margin: 20px 0 0 30px;
`;
const NameDiv = styled.div`
  margin-left: 5px;
`;

const BtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 20%; 
  margin-top : 30px;
`;

const BtnBox = styled.div`
  background-color: #FCEEE1;
  color : black;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
`;

const SkipBox = styled.div`
background-color: #FCEEE1;
display: flex;
margin: 40px 0 0 30px;
border-radius: 20px;
justify-content: center;
align-items: center;
width: 180px;
height: 50px;
opacity : 0.6;
color : #ac8623;
cursor: pointer;
`;