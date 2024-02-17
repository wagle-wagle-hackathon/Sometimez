import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

/*---------------------------날씨----------------------*/
import Spring from "../../pics/weather/Spring.png";
import Summer from "../../pics/weather/Summer.png";
import Autumn from "../../pics/weather/Autumn.png";
import Winter from "../../pics/weather/Winter.png";
import WeatherAll from "../../pics/weather/WeatherAll.png";
import axios from "axios";

export default function QuestionSecond() {
  const location = useLocation();
  const navigate = useNavigate();
  const [choices, setChoices] = useState([]);
  const token = localStorage.getItem("token");
  const gender = location.state.gender;
  const handleClick = (choceId,index) => {
    axios
      .post("/user-choice", {
          resultId : token,
          choiceId : choceId,
      })
      .then((response) => {
        console.log("POST 성공");
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
      navigate("/QuestionThird", { state: { index , gender} });
  };


  useEffect(() => {
    // API 호출
    axios
      .get("/questions", {
        params: {
          gender: gender === "male" ? 0 : 1, // 성별 정보를 쿼리스트링으로 전달
        },
      })
      .then((response) => {
        // API 응답 데이터에서 choiceId 추출
        const choices = response.data.result[1].choices; // 여기서는 첫 번째 질문에 대한 응답을 받았다고 가정합니다.
        console.log("choices:", choices);
        setChoices(choices);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, [gender]);
  
  const getWeatherPic = (weather) => {
    if (weather === 0) {
      return Spring;
    }
    if (weather === 1) {
      return Summer;
    }
    if (weather === 2) {
      return Autumn;
    }
    if (weather === 3) {
      return Winter;
    }
    else {
      return WeatherAll;
    }
  };
  const weatherPicValue = getWeatherPic(location.state.index);
  return (
    <Container>
      <ImgContainer src={weatherPicValue} alt="weatherPic" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>이성의 성격을 선택하세요</NameDiv>
          {choices.length > 0 &&
            choices.map(
              (choice, index) =>
                index < 2 && (
                  <BtnBox
                    key={index}
                    onClick={() => handleClick(choice.choiceId, index)}
                  >
                    {choice.ctext}
                  </BtnBox>
                )
            )}
          <SkipBox onClick={() => handleClick(choices[2].choiceId,null)}>
            잘 모르겠어요
          </SkipBox>
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

const BtnBox = styled.div`
  background-color: white;
  color: black;
  display: flex;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  margin-top: 30px;
  cursor: pointer;
`;

const SkipBox = styled.div`
  background-color: black;
  color: white;
  display: flex;
  margin-top: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 30px;
  font-size: 14px;
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
  background-color: #d9d9d9;
`;
