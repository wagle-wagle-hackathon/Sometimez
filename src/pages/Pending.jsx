import React, { useEffect } from "react";
import styled from "styled-components";
import PendingImg from "../pics/Pending.png";
import PendingText from "../pics/PendingText.png";
/*-----------------------Pending----------------------------------*/
/*-----------------------Men---------------------------------*/
import MovieMale from "../pics/male/Q5/MovieMale.png";
import { useNavigate } from "react-router-dom";
// import ReadMale from "../pics/male/Q5/ReadMale.png";
// import SportsMale from "../pics/male/Q5/SportsMale.png";
// import StudyMale from "../pics/male/Q5/StudyMale.png";
// /*-----------------------Women-------------------------------*/
// import MovieFemale from "../pics/male/Q5/MovieFemale.png";
// import ReadFemale from "../pics/male/Q5/ReadFemale.png";
// import SportsFemale from "../pics/male/Q5/SportsFemale.png";
// import StudyFemale from "../pics/male/Q5/StudyFemale.png";

export default function Pending() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/QuestionLast");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Container>
      <ImgContainer src={MovieMale} alt="weatherPic" />
      <PendingContainer src={PendingImg} alt="pendingImg" />
      <PendingContainer src={PendingText} alt="pendingText" style={{left : "42%" ,top:"86.5%"}}/>
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

const PendingContainer =styled.img`
position: absolute;
z-index: 1;
top : 85%;
left : 40%;
`;

