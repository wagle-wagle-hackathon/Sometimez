import React, { useEffect } from "react";
import styled from "styled-components";
import PendingImg from "../pics/Pending.png";

import { useLocation, useNavigate } from "react-router-dom";
/*-----------------------Pending----------------------------------*/
/*-----------------------Men---------------------------------*/
import MovieMale from "../pics/male/Q5/MovieMale.png";
import ReadMale from "../pics/male/Q5/ReadMale.png";
import SportsMale from "../pics/male/Q5/SportsMale.png";
import StudyMale from "../pics/male/Q5/StudyMale.png";
/*-----------------------Women-------------------------------*/
import MovieFemale from "../pics/female/Q5/MovieFemale.png";
import ReadFemale from "../pics/female/Q5/ReadFemale.png";
import SportsFemale from "../pics/female/Q5/SportsFemale.png";
import StudyFemale from "../pics/female/Q5/StudyFemale.png";
import IDK from "../pics/female/Q5/IDK.png";

export default function Pending() {
  const navigate = useNavigate();
  const location = useLocation();
  const gender = location.state.gender;

  useEffect(() => {
    const timer = setTimeout(() => {
      //navigate("/QuestionLast");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  const getGenderStyle = (value) => {
    const maleImages = [ReadMale, SportsMale, StudyMale, MovieMale];
    const femaleImages = [ReadFemale, SportsFemale, StudyFemale, MovieFemale];

    const imageArray = gender === "male" ? maleImages : femaleImages;

    return value < imageArray.length ? imageArray[value] : IDK;
  };
  const GenderStyleValue = getGenderStyle(location.state.index);

  return (
    <Container>
      <ImgContainer src={GenderStyleValue} alt="Selected Gender Style" />
      <PendingContainer>
        <ImgContainer
          src={PendingImg}
          alt="PendingImage"
          style={{ height: "100px" ,opacity: "0.4"}}
        />
        <TextContainer>
        <p>당신의 이상형과 </p>
          <p>조언을</p>
        <p>기다리는 중입니다...</p>
        </TextContainer>
      </PendingContainer>
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
  font-weight: 500;
  font-family: Pretendard;
`;

const ImgContainer = styled.img`
  position: absolute;
  z-index: 0;
  width: 100%;
  height: 100%;
`;

const PendingContainer = styled.div`
  position: absolute;
  z-index: 1;
  top: 85%;
  left: 30%;
`;

const TextContainer = styled.div`
padding-top : 15px;
  display : flex;
  flex-direction: column;
  text-align: center;
  
`