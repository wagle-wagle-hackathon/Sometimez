import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

/*-----------------------Q3----------------------------------*/
/*-----------------------Men---------------------------------*/
import ColdMale from "../../pics/male/Q3/ColdMale.png";
import WarmMale from "../../pics/male/Q3/WarmMale.png";
/*-----------------------Women-------------------------------*/
import ColdFemale from "../../pics/female/Q3/ColdFemale.png";
import WarmFemale from "../../pics/female/Q3/WarmFemale.png";
import IDK from "../../pics/female/Q3/IDK.png";

export default function QuestionThird() {
  const location = useLocation();
  const navigate = useNavigate();
  const [choices, setChoices] = useState([]);
  const token = localStorage.getItem("token");
  const gender = location.state.gender;
  const handleClick = (choceId,index) => {
    axios
      .post("http://dev.tmp-domain-service.shop/user-choice", {
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
    navigate("/QuestionFourth", { state: { index , gender } });
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
        const choices = response.data.result[2].choices; // 여기서는 첫 번째 질문에 대한 응답을 받았다고 가정합니다.
        console.log("choices:", choices);
        setChoices(choices);
      })
      .catch((error) => {
        // 에러 처리
        console.error(error);
      });
  }, [gender]);

  const getGenderStyle = (value) => {
    if (gender === "male") {
      if (value === 0) {
        return ColdMale;
      }
      if (value === 1) {
        return WarmMale;
      }
    } else {
      if (value === 0) {
        return ColdFemale;
      }
      if (value === 1) {
        return WarmFemale;
      }
      else {
        return IDK;
      }
    }
  };
  const GenderStyleValue = getGenderStyle(location.state.index);
  console.log(GenderStyleValue);
  return (
    <Container>
      <ImgContainer src={GenderStyleValue} alt="GenderStylePic" />
      <BoxContainer>
        <ContainerBox>
          <NameDiv>이성의 옷 스타일을 선택하세요</NameDiv>
          <BtnContainer>
            {choices.map(
              (option, index) =>
                index < 4 && (
                  <BtnBox
                    key={option.choiceId}
                    onClick={() => handleClick(option.choiceId, index)}
                  >
                    {option.ctext}
                  </BtnBox>
                )
            )}
          </BtnContainer>
          <SkipBox onClick={() => handleClick(choices[4].choceId, null)}>잘 모르겠어요</SkipBox>
          <IndexBox>
            <Index />
            <Index />
            <CurrentIndex />
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
