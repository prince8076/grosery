import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const reasons = {
  0: "I no longer wish to use Grocekart.",
  1: "I am using a different account",
  2: "I'm concerned about my privacy and security.",
  3: "I don't find the app useful",
  4: "I'm receiving too many emails/notifications from your platform.",
  5: "This app is not working properly",
  6: "Other",
};

const DeleteReasons = () => {
  const navigate = useNavigate();

  const handleReasonClick = (reason) => {
    navigate("/account/privacy/delete-account/feedback", { state: { reason } });
  };

  return (
    <div className="w-full">
      <div className="px-8">
        <div className="p-2 border-b border-account-full_shadow">
          <h3 className="text-[23px] font-[600]">Delete my account</h3>
          <span className="text-[14px] font-[400]">
            What is the reason for wanting to delete your account?
          </span>
        </div>
        {Object.values(reasons).map((reason, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 border-b border-account-full_shadow cursor-pointer"
            onClick={() => handleReasonClick(reason)}
          >
            <span className="text-[14px] font-[400]">{reason}</span>
            <FaChevronRight className="text-[#000] w-[10px] h-[18px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeleteReasons;
