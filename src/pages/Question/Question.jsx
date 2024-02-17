import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FirstBackground from "../../pics/FirstBackground.png";
import DotNum from "../../components/DotNum";

export default function Introduction() {
  const navigate = useNavigate();
  const [gender, setGender] = useState(null);
  const [choices, setChoices] = useState([]);

  const handleClick = (weather) => {
    navigate("/QuestionSecond", { state: { weather } });
  };

  useEffect(() => {
    // API 호출
    axios.get("http://dev.tmp-domain-service.shop/questions", {
      params: {
        gender: gender === "male" ? 0 : 1, // 성별 정보를 쿼리스트링으로 전달
      },
    })
      .then((response) => {
        // API 응답 데이터에서 choiceId 추출
        const choices = response.data.result[0].choices; // 여기서는 첫 번째 질문에 대한 응답을 받았다고 가정합니다.
        console.log("choices:", choices);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, [gender]);


  return (
    <Container>
      <ImgContainer src={FirstBackground} alt="Introduction" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>상대방이 좋아하는 계절은?</NameDiv>
          <BtnContainer>
            {choices.length > 0 && (
              <>
                <BtnBox onClick={() => handleClick(choices[0].ctext)}>{choices[0].ctext}</BtnBox>
                <BtnBox onClick={() => handleClick(choices[1].ctext)}>{choices[1].ctext}</BtnBox>
                <BtnBox onClick={() => handleClick(choices[2].ctext)}>{choices[2].ctext}</BtnBox>
                <BtnBox onClick={() => handleClick(choices[3].ctext)}>{choices[3].ctext}</BtnBox>
              </>
            )}
          </BtnContainer>
          <SkipBox onClick={() => handleClick(5)}>잘 모르겠어요</SkipBox>
        </ContainerBox>
        <IndexBox>
          <CurrentIndex />
          <Index />
          <Index />
          <Index />
          <Index />
        </IndexBox>
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

