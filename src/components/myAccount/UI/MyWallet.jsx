import React from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";
function MyWallet() {
  return (
    <div>
      <div className="md:m-5 bg-pink-100 h-20 flex flex-col gap-2 items-center justify-center">
        <h1>My Balance</h1>
        <h1 className="text-2xl flex items-center">
          <MdOutlineCurrencyRupee />0
        </h1>
      </div>
    </div>
  );
}

export default MyWallet;
