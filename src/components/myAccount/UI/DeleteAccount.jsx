import React, { useState } from "react";
import styled from "styled-components";
import { FaChevronRight, FaTrashAlt, FaCheckCircle } from "react-icons/fa";

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
`;

const OptionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const OptionItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  
  &:hover {
    background-color: #f9f9f9;
  }
`;

const FeedbackContainer = styled.div`
  margin-top: 20px;
`;

const FeedbackInput = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #c5a7a7;
  border-radius: 4px;
  margin-bottom: 20px;
  outline: none;
  resize: none;

  &::placeholder {
    color: #b8b8b8;
  }
`;

const DeleteButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #8e0f5d;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #75104d;
  }
`;

const Note = styled.p`
  font-size: 12px;
  color: #666;
  margin-top: 20px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  max-width: 500px;
  width: 100%;
`;

const ModalHeader = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ModalIcon = styled.div`
  font-size: 50px;
  color: #8e0f5d;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ModalButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const CancelButton = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #008000;
  border: 1px solid #008000;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ConfirmButton = styled.button`
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #cc0000;
  }
`;

const SuccessMessage = styled.p`
  font-size: 18px;
  color: #008000;
  margin-top: 20px;
`;

const options = [
  "I no longer wish to use Grocekart.",
  "I am using a different account.",
  "I'm concerned about my privacy and security.",
  "I'm receiving too many emails/notifications from your platform.",
  "This app is not working properly.",
  "Other"
];

function DeleteAccount() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAccountDeleted, setIsAccountDeleted] = useState(false);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    // Handle account deletion logic here
    console.log("Account deleted for reason:", selectedOption, "with feedback:", feedback);
    localStorage.clear();
    window.location.reload();
    setIsModalOpen(false);
    setIsAccountDeleted(true);
  };

  return (
    <Container>
      {!selectedOption ? (
        <>
          <Title>Delete my account</Title>
          <Subtitle>What is the reason for wanting to delete your account?</Subtitle>
          <OptionList>
            {options.map((option, index) => (
              <OptionItem key={index} onClick={() => handleOptionClick(option)}>
                {option}
                <FaChevronRight />
              </OptionItem>
            ))}
          </OptionList>
        </>
      ) : (
        <FeedbackContainer>
          <Title>{selectedOption}</Title>
          <Subtitle>We value your input and appreciate any feedback you can provide! (Optional)</Subtitle>
          <FeedbackInput
            placeholder="Please share your feedback with us (Optional)"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <DeleteButton onClick={handleDeleteClick}>Delete My Account</DeleteButton>
          <Note>
            Note*: All data associated with this account will be deleted in accordance with our privacy policy.
            You will not be able to retrieve this information once deleted.
          </Note>
        </FeedbackContainer>
      )}

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalIcon>
              <FaTrashAlt />
            </ModalIcon>
            <ModalHeader>Deleting your account?</ModalHeader>
            <Subtitle>
              Once deleted, your data will be permanently erased as per our privacy policy,
              and recovery will not be possible.
            </Subtitle>
            <ModalButtons>
              <CancelButton onClick={handleCancel}>Cancel</CancelButton>
              <ConfirmButton onClick={handleConfirmDelete}>Delete</ConfirmButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
      {isAccountDeleted && (
        <ModalOverlay>
          <ModalContent>
            <ModalIcon>
              <FaCheckCircle />
            </ModalIcon>
            <SuccessMessage>Your account has been successfully deleted.</SuccessMessage>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default DeleteAccount;
