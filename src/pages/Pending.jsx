import React from "react";
import styled from "styled-components";

/*-----------------------Pending----------------------------------*/
/*-----------------------Men---------------------------------*/
import MovieMale from "../pics/male/Q5/MovieMale.png";
// import ReadMale from "../pics/male/Q5/ReadMale.png";
// import SportsMale from "../pics/male/Q5/SportsMale.png";
// import StudyMale from "../pics/male/Q5/StudyMale.png";
// /*-----------------------Women-------------------------------*/
// import MovieFemale from "../pics/male/Q5/MovieFemale.png";
// import ReadFemale from "../pics/male/Q5/ReadFemale.png";
// import SportsFemale from "../pics/male/Q5/SportsFemale.png";
// import StudyFemale from "../pics/male/Q5/StudyFemale.png";

export default function Pending() {

  return (
    <Container>
      <ImgContainer src={MovieMale} alt="weatherPic" />
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
