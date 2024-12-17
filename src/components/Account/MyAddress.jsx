import React from "react";
import { IoMdAdd } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import NewAddressCard from "../address/NewAddressCard";
import { showAddressForm } from "../../store/reducer/selectAddessSlice";
const MyAddress = () => {
  const { addressForm } = useSelector((state) => state.selectAddressSlice);
  const dispatch = useDispatch();
  console.log(addressForm);
  return (
    <>
      <div className="flex justify-center mt-[5vh] w-full h-full ">
        <div className="flex flex-col gap-4 items-center  p-8">
          <img
            src="/images/account-assets/address.png"
            alt=""
            className="w-[140px] h-[172px]"
          />
          <div className="text-center">
            <h3>You currently have no saved addresses</h3>
            <p>
              Please provide the address where you would like your orders
              delivered.
            </p>
          </div>
          <button
            className="p-2 bg-primary-dark text-white font-[500] text-[20px] border rounded-lg"
            onClick={() => dispatch(showAddressForm())}
          >
            <IoMdAdd className="inline w-[20px] h-[20px]" />
            Add New Address
          </button>
        </div>
      </div>
      {addressForm && <NewAddressCard />}
    </>
  );
};

export default MyAddress;
