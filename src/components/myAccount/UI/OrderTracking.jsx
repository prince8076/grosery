import React, { useState } from "react";
import {
  FaTruck,
  FaCheckCircle,
  FaShippingFast,
  FaBoxOpen,
  FaHome,
} from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import TrackingMap from "./TrackingMap";
function OrderTracking() {
  const steps = [
    { label: "Order Confirmed", icon: <CgNotes /> },
    { label: "Preparing items", icon: <FaBoxOpen /> },
    { label: "Items is on the way", icon: <FaShippingFast /> },
    { label: "Delivered", icon: <FaHome /> },
  ];
  const [currentStep, setCurrentStep] = useState(2);
  return (
    <>
      <div className="flex items-center justify-between my-5 w-full px-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center flex-1 relative">
            {/* Circle for each step */}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm ${
                index <= currentStep ? "bg-custom-purple" : "bg-gray-300"
              }`}
            ></div>

            {/* Label below each circle */}
            <div
              className={`text-xs text-center absolute top-10 ${
                index <= currentStep
                  ? "font-bold text-gray-800"
                  : "text-gray-500"
              }`}
            >
              <div className="flex flex-col items-center gap-1 border">
                <div className="text-3xl flex justify-end">{step.icon}</div>
                {step.label}
              </div>
            </div>

            {/* Line between steps */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-1/2 left-[61%] w-full h-1 transform -translate-x-1/2 ${
                  index < currentStep ? "bg-custom-purple" : "bg-gray-300"
                }`}
                style={{
                  width: "calc(100% - 2rem)", // Adjust width to span between circles
                  zIndex: -1, // Ensure the line is behind the circles
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-20">
        <TrackingMap />
      </div>
    </>
  );
}

export default OrderTracking;
