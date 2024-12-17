import React, { useState } from "react";
import styled from "styled-components";
import SuccessCard from "./SuccessCard";

function UsernamePage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setErrorMessage("Username is required.");
      return;
    }

    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <SuccessCard />;
  }

  return (
    <MainContainer>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Title>Enter Your Details</Title>
          {errorMessage && <Error>{errorMessage}</Error>}
          <Label>
            Username
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Label>
          <Label>
            Email ID (optional)
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Label>
          <Label>
            Date of Birth (optional)
            <Input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </Label>
          <Button type="submit">Submit</Button>
        </Form>
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
  background-color: #f5f5f5;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.h2`
  font-family: Poppins;
  font-weight: 500;
  font-size: 23px;
  line-height: 36px;
  text-align: center;
  color: #6c757d;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Label = styled.label`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #6c757d;
  margin-bottom: 10px;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const Input = styled.input`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #8e0f5d;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }
`;

const Button = styled.button`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  padding: 10px 20px;
  color: white;
  background-color: #8e0f5d;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #6e0c47;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
  }
`;

const Error = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  color: red;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default UsernamePage;
