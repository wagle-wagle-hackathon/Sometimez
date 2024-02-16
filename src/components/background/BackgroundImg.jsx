import React from "react";
import styled from "styled-components";
import SomeTimez from "../../pics/Sometimez.jpg";
export default function BackgroundImg() {
  return <BackgroundCover>BackgroundImg</BackgroundCover>;
}
const BackgroundCover = styled.div`
  background-image: url(${SomeTimez});
  background-size: cover;
  background-position: center;
`;
