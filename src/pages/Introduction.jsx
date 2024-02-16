import React from "react";
import styled from "styled-components";
import IntroductionImage from "../pics/IntroductionPic.png";
export default function Introduction() {


  return (
      <div>
        <ImgContainer src={IntroductionImage} alt="Introduction"/>
        <BoxContainer>
            <NameDiv>할로</NameDiv>
            <NameInput></NameInput>
        </BoxContainer>
      </div>
  );
}
const ImgContainer = styled.img`
position: absolute;
z-index: 0;
width : 100%;
height : 100%;

`
const BoxContainer = styled.div`
position: absolute;
display: flex;
width: 80%;
height: 40%; 
border-radius: 30px;
top : 30%;
left : 10%;
background-color: white;
z-index: 1;
flex-direction: column;
`;

const NameDiv = styled.div`

`;

const NameInput= styled.input`

`

const Gender = styled.div`

`;