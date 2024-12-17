import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { assignSelectedAddress } from "../../../store/reducer/selectAddessSlice";

function SaveAddressAs() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("home");
  const [other, setOther] = useState(false);

  // Function to handle saving address

  const saveAddress = (type) => {
    setActive(type);
    setOther(type == "other");
  };
  const onClickHandleOther = () => {
    setOther(!other);
    if (!other) {
      setActive("other");
    } else {
      setActive("");
    }
  };

  useEffect(() => {
    dispatch(assignSelectedAddress({ locationType: active }));
  }, [active]);
  // <SaveAddressAs />;
  return (
    <div className="flex flex-col gap-2 px-2 w-full text-xs">
      <div className="flex">
        <span>save address as*</span>
      </div>
      {!other ? (
        <div className="flex gap-2">
          <div
            className={`border flex  rounded-lg cursor-pointer ${
              active === "home" && "bg-pink-300"
            } `}
            onClick={() => saveAddress("home")}
          >
            <div className="flex gap-1 w-[70px] py-0.5 items-center justify-center">
              <figure>
                <img
                  src="/images/home.png"
                  alt="home"
                  className="h-[20px] w-[20px]"
                />
              </figure>

              <span>Home</span>
            </div>
          </div>
          <div
            className={`border flex  rounded-lg cursor-pointer ${
              active === "work" && "bg-pink-300"
            } `}
            onClick={() => saveAddress("work")}
          >
            <div className="flex gap-1 w-[70px] py-0.5 items-center justify-center">
              <figure>
                <img src="/images/office.png" alt="Work" className="h-5 w-5" />
              </figure>
              <span>Work</span>
            </div>
          </div>
          <div
            className={`border flex  rounded-lg cursor-pointer ${
              active === "hotel" && "bg-pink-300"
            } `}
            onClick={() => saveAddress("hotel")}
          >
            <div className="flex gap-1 w-[70px] py-0.5 items-center justify-center">
              <figure>
                <img src="/images/hotel.png" alt="hotel" className="h-5 w-5" />
              </figure>
              <span>Hotel</span>
            </div>
          </div>
          <div
            className={`border flex  rounded-lg cursor-pointer ${
              active === "other" && "bg-pink-300"
            } `}
            onClick={onClickHandleOther}
          >
            <div className="flex gap-1 w-[70px] py-0.5 items-center justify-center">
              <figure>
                <img
                  src="/images/location-marker.png"
                  alt="Other"
                  className="h-5 w-5"
                />
              </figure>
              <span>Other</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <div>
            <div
              className={`border flex  rounded-lg cursor-pointer ${
                other && "bg-pink-300"
              } `}
              onClick={onClickHandleOther}
            >
              <div className="flex gap-1 w-[70px] py-0.5 items-center justify-center">
                <figure>
                  <img
                    src="/images/location-marker.png"
                    alt="Other"
                    className="h-5 w-5"
                  />
                </figure>
                <span>Other</span>
              </div>
            </div>
          </div>
          <div className="flex items-center border-b p-1">
            <input
              type="text"
              value={active === "other" ? "" : active}
              placeholder="save as"
              onChange={(e) => setActive(e.target.value)}
              required
              className="w-full outline-none "
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default SaveAddressAs;
