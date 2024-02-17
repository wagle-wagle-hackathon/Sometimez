import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

/*-----------------------Q4----------------------------------*/
/*-----------------------Men---------------------------------*/
import BusMale from "../../pics/male/Q4/BusMale.png";
import GoodMale from "../../pics/male/Q4/GoodMale.png";
import HipMale from "../../pics/male/Q4/HipMale.png";
import VintageMale from "../../pics/male/Q4/VintageMale.png";
import IDKMale from "../../pics/male/Q4/IDK.png";
/*-----------------------Women-------------------------------*/
import BusFemale from "../../pics/female/Q4/BusFemale.png";
import GoodFemale from "../../pics/female/Q4/GoodFemale.png";
import HipFemale from "../../pics/female/Q4/HipFemale.png";
import VintageFemale from "../../pics/female/Q4/VinFemale.png";
import IDKFemale from "../../pics/female/Q4/IDK.png";

export default function QuestionFourth() {
  const location = useLocation();
  const navigate = useNavigate();
  const [choices, setChoices] = useState([]);
  const gender = location.state.gender;

  const token = localStorage.getItem("token");
  const handleClick = (choceId, index) => {
    axios
      .post("http://dev.tmp-domain-service.shop/user-choice", {
        params: {
          token,
          choceId,
        },
      })
      .then((response) => {
        console.log("POST 성공");
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
    navigate("/Pending", { state: { index ,gender} });
  };

  useEffect(() => {
    // API 호출
    axios
      .get("http://dev.tmp-domain-service.shop/questions", {
        params: {
          gender: gender === "male" ? 0 : 1, // 성별 정보를 쿼리스트링으로 전달
        },
      })
      .then((response) => {
        // API 응답 데이터에서 choiceId 추출
        const choices = response.data.result[3].choices; // 여기서는 첫 번째 질문에 대한 응답을 받았다고 가정합니다.
        console.log("choices:", choices);
        setChoices(choices);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, [gender]);

  const getGenderStyle = (value) => {
    const maleImages = [VintageMale, GoodMale, HipMale, BusMale,IDKMale];
    const femaleImages = [VintageFemale, GoodFemale, HipFemale, BusFemale,IDKFemale];

    const imageArray = gender === "male" ? maleImages : femaleImages;

    return imageArray[value] || imageArray[4];
  };

  const GenderStyleValue = getGenderStyle(location.state.index);
  return (
    <Container>
      <ImgContainer src={GenderStyleValue} alt="GenderStylePic" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>이성의 취미를 선택하세요</NameDiv>
          <BtnContainer>
            {choices.map(
              (option, index) =>
                index < 4 && (
                  <BtnBox
                    key={option.choceId}
                    onClick={() => handleClick(option.choceId, index)}
                  >
                    {option.ctext}
                  </BtnBox>
                )
            )}
          </BtnContainer>
          <SkipBox onClick={() => handleClick(choices[4].choiceId,null)}>잘 모르겠어요</SkipBox>
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
  column-gap: 5%;
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
