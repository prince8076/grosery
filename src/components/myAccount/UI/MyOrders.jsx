import React, { useState } from "react";
import OrderHistory from "./OrderHistory";

function MyOrders() {
  const [ongoing, setOngoing] = useState(true);
  const [prev, setPrev] = useState(false);


  function handleOngoing() {
    setOngoing(true);
    setPrev(false);
  }

  function handlePrev() {
    setPrev(true);
    setOngoing(false);
  }
  return (
    <div>
      <h1 className="text-center m-2 text-lg font-semibold">My Orders</h1>
      <div className="flex justify-start items-center  mt-2 m-2 p-2 gap-2">
        <button onClick={handleOngoing} className={`${ongoing ? "border-b-2 border-custom-purple" : " "}`}>Ongoing</button>
        <button onClick={handlePrev} className={`${prev ? "border-b-2 border-custom-purple" : ''}`}>Previous</button>
      </div>
      <div>
        <OrderHistory ongoing={ongoing} />
      </div>
    </div>
  );
}

export default MyOrders;
