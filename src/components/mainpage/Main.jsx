import React, { useEffect } from "react";
import styled from "styled-components";
import SomeTimez from "../../pics/Sometimez.jpg";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/Introduction");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <Container>
      <ImgContainer src={SomeTimez} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #FDF0E0;
`;

const ImgContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0;
`;
