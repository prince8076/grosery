import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import LoginPopup from "./login";

const theme = {
  colors: {
    primary: "#8E0F5D",
    secondary: "#FFDEEF",
    text: "#000000",
    mutedText: "#6c757d",
    background: "#FFFFFF",
    border: "#CACACA",
  },
  font: {
    family: "Poppins",
    size: {
      large: "24px",
      medium: "18px",
      small: "14px",
      xSmall: "12px",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 600,
    },
  },
};

function OtpVerification({ phone, onClose }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(27);
  const [resendDisabled, setResendDisabled] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    let interval;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendDisabled(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [resendTimer]);

  useEffect(() => {
    for (let i = 0; i < otp.length; i++) {
      if (!otp[i]) {
        inputRefs.current[i]?.focus();
        break;
      }
    }
  }, [otp]);

  const handleResendOtp = () => {
    setResendTimer(27);
    setResendDisabled(true);
  };

  const handleInputChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (newOtp.every((code) => code !== "")) {
      handleVerifyOtp();
    }

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axios.post("/api/auth/verify-otp", { phone, otp: otp.join("") });
      const response = await axios.post("/api/auth/check-user", { phone });
      if (response.data.userExists) {
        alert("OTP Verified! Redirecting to dashboard...");
        navigate("/");
      } else {
        alert("OTP Verified! Redirecting to user details...");
        navigate("/user-details", { state: { phone } });
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Failed to verify OTP");
    }
  };

  const handleCrossButtonClick = () => {
    onClose();
  };

  const handleBackButtonClick = () => {
    setShowLoginPopup(true);
  };

  return (
    <MainContainer>
      {showLoginPopup ? (
        <LoginPopup />
      ) : (
        <Container>
          <Header>
            <BackButton onClick={handleBackButtonClick}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </BackButton>
            <Title>OTP Verification</Title>
            <CrossButton onClick={handleCrossButtonClick}>
              <FontAwesomeIcon icon={faTimes} />
            </CrossButton>
          </Header>
          <Content>
            <Subtitle>We have sent a 4-digit code to</Subtitle>
            <PhoneNumber>+91-{phone}</PhoneNumber>
            <OtpContainer>
              {[...Array(4)].map((_, index) => (
                <OtpInput
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  value={otp[index]}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  maxLength="1"
                />
              ))}
            </OtpContainer>
            <Resend disabled={resendDisabled} onClick={handleResendOtp}>
              {resendTimer > 0 ? (
                `Resend Code (in ${resendTimer} secs)`
              ) : (
                <UnderlinedText>Resend Code</UnderlinedText>
              )}
            </Resend>
          </Content>
        </Container>
      )}
    </MainContainer>
  );
}
// Styled components
const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${theme.colors.primary};
`;

const CrossButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: ${theme.colors.primary};
`;

const Title = styled.h2`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.bold};
  margin: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.p`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.regular};
  margin: 10px 0;
`;

const PhoneNumber = styled.p`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.bold};
  margin: 10px 0;
  color: ${theme.colors.primary};
`;

const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 15px;
  margin: 20px 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const OtpInput = styled.input`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.medium};
  text-align: center;
  width: 50px;
  height: 50px;
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;

  @media (max-width: 768px) {
    font-size: ${theme.font.size.small};
    width: 40px;
    height: 40px;
  }
`;

const Resend = styled.button`
  font-family: ${theme.font.family};
  font-weight: ${theme.font.weight.medium};
  font-size: ${theme.font.size.medium};
  color: ${({ disabled }) =>
    disabled ? theme.colors.mutedText : theme.colors.primary};
  border: none;
  background: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  @media (max-width: 768px) {
    font-size: ${theme.font.size.small};
  }
`;

const UnderlinedText = styled.span`
  text-decoration: underline;
  color: ${theme.colors.primary};
`;

export default OtpVerification;
