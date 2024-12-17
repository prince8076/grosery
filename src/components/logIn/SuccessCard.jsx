import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function SuccessCard() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <MainContainer>
      <Container>
        <IconContainer>
          <FontAwesomeIcon icon={faCheckCircle} size="3x" color="#28a745" />
        </IconContainer>
        <TextContainer>
          <SuccessText>
            You have successfully logged into your account.
          </SuccessText>
        </TextContainer>
      </Container>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    height: auto;
    padding: 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const TextContainer = styled.div`
  text-align: center;
`;

const SuccessText = styled.p`
  font-family: Poppins;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 1%;
  color: #000000;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export default SuccessCard;
