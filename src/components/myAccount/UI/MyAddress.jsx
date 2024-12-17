import React from "react";
import { useSelector } from "react-redux";
import AddNewAddress from "../../addresspage/addressUI/AddNewAddress";
import Addresses from "./Addresses";
import NotFound from "../../UI/NotFound";
import NewAddressCard from "../../addresspage/NewAddressCard";
function MyAddress() {
  const { allAddress } = useSelector((state) => state.addressSlice);
  const { addressForm } = useSelector((state) => state.selectAddressSlice);
  // window.location.reload();
  return allAddress.length > 0 ? (
    <>
      <div className="md:p-3">
        <h2 className="text-gray-600 font-bold my-2">My Addresses</h2>
        <div className="cursor-pointer">
          <AddNewAddress />
        </div>

        <div className="flex flex-col gap-2 my-5">
          {allAddress.map((address) => (
            <Addresses address={address} />
          ))}
        </div>
      </div>
      {addressForm && <NewAddressCard />}
    </>
  ) : (
    <div className=" flex items-center justify-center mt-5">
      <NotFound
        image={"/images/account-assets/address.png"}
        title={"You Currently have no save address"}
        description={
          "Please provide the address where you would like your orders delivered."
        }
        pathTitle={"+ Add new address"}
      />
    </div>
  );
}

export default MyAddress;
