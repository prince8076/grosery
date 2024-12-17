import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";



const FeedBack = () => {
  const [Delete, setDelete] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const location = useLocation();
  const { reason } = location.state || {};

  // Effect to handle hiding the confirmation message after 3 seconds
  useEffect(() => {
    if (confirmDelete) {
      // Set a timer to hide the confirmation message after 3 seconds
      const timer = setTimeout(() => {
        setConfirmDelete(false);
      }, 3000);

      // Clean up the timer when the component unmounts or if `confirmDelete` changes
      return () => clearTimeout(timer);
    }
  }, [confirmDelete]);

  return (
    <div className="w-full">
      <div className="px-8">
        <div className="p-2 ">
          <h3 className="text-[23px] font-[600]">{reason}</h3>
          <span className="text-[14px] font-[400]">
            We value your input and appreciate any feedback you can provide!
            (Optional)
          </span>
          <input
            className="w-full mt-4 p-2 border border-primary-dark rounded"
            placeholder="Please share your feedback with us (Optional)"
          ></input>
          <div className="flex justify-center">
            <button
              onClick={() => setDelete(true)}
              className="my-4 bg-primary-dark text-white px-8 p-2 rounded-lg text-[20px] font-[500]"
            >
              Delete My Account
            </button>
          </div>
          <p className="text-[14px] font-[400]" style={{ lineHeight: "25px" }}>
            Note* : All data associated with this account will be deleted in
            accordance with our privacy policy. You will not be able to retrieve
            this information once deleted.
          </p>
        </div>
      </div>
      {Delete && !confirmDelete && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white px-14 py-4 rounded-3xl w-[70vw] h-[55vh] flex flex-col items-center">
            <div className="w-[110px] h-[110px]">
              <img src="/images/account-assets/deleteConfirm.png" alt="" style={{ objectFit: 'cover' }} />
            </div>
            <h1 className="text-[23px] font-[600] my-2">Deleting your account?</h1>
            <p className="text-[23px] font-[400] mb-2 text-center">
              Once deleted, your data will be permanently erased as per our privacy policy, and recovery will not be possible.
            </p>
            <div className="flex justify-between p-4 w-[full] mt-4" style={{ width: "-webkit-fill-available" }}>
              <button
                onClick={() => setConfirmDelete(false)}
                className="text-[green] px-8 p-2 rounded-lg text-[20px] font-[500]"
              >
                Cancel
              </button>
              <button
                onClick={() => setConfirmDelete(true)}
                className="text-[red] px-8 p-2 rounded-lg text-[20px] font-[500]"
              >
                Delete 
              </button>
            </div>
          </div>
        </div>
      )}
      {confirmDelete && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center">
          <div className="bg-white px-14 py-4 rounded-3xl w-[70vw] h-[45vh] flex flex-col items-center justify-center gap-8">
            <div className="flex items-center justify-center w-[60px] h-[60px] bg-green-700 rounded-full">
              <img src="/images/account-assets/right.png" alt="" style={{ objectFit: 'cover' }} className="w-[42px] h-[42px]" />
            </div>
            <h1 className="text-[32px] font-[500]">Your account has been successfully deleted.</h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
