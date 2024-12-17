import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpVerification from "./OtpVerification";
import { useDispatch } from "react-redux";
import { generalActions } from "../../store/reducer/generalSlice";

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

function Login() {
  const [phone, setPhone] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneEntered, setPhoneEntered] = useState(false);
  const dispatch = useDispatch();

  const handleSendOtp = async (event) => {
    event.preventDefault();
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }
    setPhone(`${phone}`);
    setShowOtpInput(true);
  };
  const handleOtpPopupClose = () => {
    setShowOtpInput(false);
    dispatch(generalActions.setLoginState(false));
  };

  const handlePhoneNumberChange = (value) => {
    const phoneNumberWithoutCountryCode = value.startsWith("91")
      ? value.slice(2)
      : value;
    setPhone(phoneNumberWithoutCountryCode);
    setPhoneEntered(phoneNumberWithoutCountryCode.length === 10);
  };

  const onOtpSubmit = (otp) => {
    console.log(`OTP submitted: ${otp}`);
    // Add your OTP verification logic here
  };

  const handleRedirectHome = () => {
    dispatch(generalActions.setLoginState(false));
  };

  return (
    <MainContainer>
      <FirstContainer>
        {!showOtpInput ? (
          <SecondContainer>
            <CloseIcon icon={faTimes} onClick={handleRedirectHome} />
            <ThirdContainer>
              <Logo
                src="/images/app/navbar/grocekart_logo.png"
                alt="Grocekart"
              />
              <Title>Your 10-minute delivery partner</Title>
              <Subtitle>Log in or Sign up here</Subtitle>
              <InputLabel>Phone</InputLabel>
              <PhoneInputWrapper>
                <StyledPhoneInput
                  country={"in"}
                  onlyCountries={["in"]}
                  value={`91${phone}`}
                  onChange={handlePhoneNumberChange}
                  placeholder="Enter your phone number"
                  inputProps={{
                    required: true,
                  }}
                  disableDropdown={true}
                  inputStyle={{ paddingLeft: "58px" }}
                />
              </PhoneInputWrapper>
              <StyledButton onClick={handleSendOtp} phoneEntered={phoneEntered}>
                Continue
              </StyledButton>
              <TermsText>
                By continuing, you agree to our{" "}
                <StyledLink>Terms & Conditions</StyledLink>
              </TermsText>
            </ThirdContainer>
          </SecondContainer>
        ) : (
          <OtpContainer>
            <p>Enter OTP sent to +91-{phone}</p>
            <OtpVerification
              length={4}
              phone={phone}
              onOtpSubmit={onOtpSubmit}
              onClose={handleOtpPopupClose}
            />
          </OtpContainer>
        )}
      </FirstContainer>
    </MainContainer>
  );
}

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  ${flexCenter}
  width: 100vw;
  height: 100vh;
`;

const FirstContainer = styled.div`
  ${flexCenter}
  width: 100%;
  height: 100%;
`;

const SecondContainer = styled.div`
  ${flexCenter}
  position: relative;
  background-color: ${theme.colors.background};
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 20px;
  width: 400px;
  height: auto;
`;

const ThirdContainer = styled.div`
  max-width: 350px;
  ${flexCenter}
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const commonTextStyle = css`
  font-family: ${theme.font.family};
  text-align: center;
  color: ${theme.colors.text};
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const Title = styled.h2`
  ${commonTextStyle}
  font-size: ${theme.font.size.large};
  font-weight: ${theme.font.weight.bold};
`;

const Subtitle = styled.p`
  ${commonTextStyle}
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.regular};
`;

const InputLabel = styled.label`
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.medium};
  font-weight: ${theme.font.weight.regular};
  color: ${theme.colors.text};
  margin-bottom: 5px;
  position: relative;
  left: -145px;
  top: 20px;
`;

const PhoneInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.phoneEntered ? theme.colors.primary : theme.colors.secondary};
  border: 1.5px solid ${theme.colors.secondary};
  color: #ffffff;
  font-size: ${theme.font.size.small};
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.primary};
  }
`;

const TermsText = styled.p`
  ${commonTextStyle}
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.regular};
  color: ${theme.colors.mutedText};
`;

const StyledLink = styled.span`
  ${commonTextStyle}
  font-size: ${theme.font.size.small};
  font-weight: ${theme.font.weight.medium};
  color: ${theme.colors.primary};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const iconStyles = css`
  width: 20px;
  height: 20px;
  position: absolute;
  padding: 6.32px;
  gap: 0px;
  opacity: 1;
  cursor: pointer;

  &:hover {
    color: #ff0000;
  }
`;

const CloseIcon = styled(FontAwesomeIcon)`
  ${iconStyles}
  top: 10px;
  right: 10px;
  z-index: 1;
`;

const StyledPhoneInput = styled(PhoneInput)`
  .form-control {
    font-size: 14px;
    padding-left: 58px;
    background: ${theme.colors.background};
    border: 1px solid ${theme.colors.border};
    border-radius: 5px;
    height: 40px;
    width: 100%;
    max-width: 350px;
    outline: none;
  }

  .form-control:focus {
    border-color: #1d8ff5;
    box-shadow: 0 0 8px rgba(29, 143, 245, 0.2);
  }

  .flag-container {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .special-label {
    display: none;
  }
`;

const OtpContainer = styled.div`
  ${flexCenter}
  flex-direction: column;
`;

export default Login;
