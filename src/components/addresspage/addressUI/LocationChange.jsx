import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

import { useDispatch, useSelector } from "react-redux";
import Address from "./Address";
import {
  hideChangeLocation,
  handleBackButtom,
} from "../../../store/reducer/selectAddessSlice";
import { useGoogleMap } from "../../context/MapLoaderContext";
import { calculateDistance } from "../../../store/actions/addressActions";
import NewAddressCard from "../NewAddressCard";
import ConfirmPopup from "../../UI/ConfirmPopup";

function LocationChange() {
  const dispatch = useDispatch();
  const { allAddress } = useSelector((state) => state.addressSlice);
  const { addressForm, isConfirm } = useSelector(
    (state) => state.selectAddressSlice
  );
  const { isLoaded } = useGoogleMap();
  const [movePopup, setMovePopup] = useState(true);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  // CHANGE LOCATION ONCLICK FUNCTIONS
  const handlePlaceChanged = async (description) => {
    setValue(description, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address: description });
      console.log(results);
      const { lat, lng } = await getLatLng(results[0]);

      const location = {
        lat: lat,
        lng: lng,
        landmark: description,
      };
      localStorage.setItem("location", JSON.stringify(location));
      dispatch(calculateDistance(description));
      dispatch(handleBackButtom());
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (value) {
      setMovePopup(false);
    }
  }, [value]);

  const coords =
    localStorage.getItem("location") &&
    JSON.parse(localStorage.getItem("location"));

  useEffect(() => {
    if (coords) {
      setMovePopup(false);
    }
  }, []);

  // ANIMATION STYLE FOR POP UP
  const popupStyle = movePopup
    ? { animation: "movePopup 1s infinite alternate" }
    : {};

  const handleDetectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const location = {
            lat: latitude,
            lng: longitude,
            landmark: "current Location",
          };
          localStorage.setItem("location", JSON.stringify(location));
          console.log(location);
        },
        (err) => {
          console.error(`Error ${err.message}`);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-stone-900/50 z-10"
        onClick={() => dispatch(handleBackButtom())}
      >
        <div
          className="w-[380px] bg-gray-200 md:flex flex-col absolute  top-16   md:top-[85px] left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-10 border border-b shadow-xl"
          onClick={(e) => e.stopPropagation()}
          // style={popupStyle}
        >
          <IoMdClose
            className="absolute right-0 top-2 mr-3 cursor-pointer"
            onClick={() => dispatch(handleBackButtom())}
          />
          <div className="search flex flex-col gap-2 p-3">
            <div className="mt-2 px-1">
              <span className="text-xs">Change Location</span>
            </div>
            <div className="flex items-center justify-around gap-1 w-full">
              {/* Detect Location Button */}
              <button
                className="border p-2 rounded-lg w-[120px] text-[10px] text-white bg-custom-purple hover:bg-custom-purple/60"
                // style={{ backgroundColor: "#8E0F5D" }}
                onClick={handleDetectLocation}
              >
                Detect My Location
              </button>

              {/* Seperator */}
              <div className="h-[28px] w-[28px] rounded-full flex items-center justify-center border border-gray-400  bg-white text-xs ">
                <span className="">OR</span>
              </div>
              {/* Input for Select Location */}
              <div className="flex p-1 items-center border h-8 border-gray-400 rounded-lg w-[180px] bg-white">
                {isLoaded && (
                  <input
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    disabled={!ready}
                    placeholder="search Location"
                    className="p-0.5 w-full text-[11px] outline-none bg-white animate-pulse"
                  />
                )}
              </div>
            </div>
          </div>
          {/* Showing All location While Searching */}

          {value ? (
            <div className="bg-white  overflow-y-scrol">
              <ul className="">
                {status === "OK" &&
                  data.map(({ place_id, description }) => (
                    <div
                      key={place_id}
                      className="flex items-center h-12 p-2 gap-3 hover:bg-gray-300 text-xs border border-b "
                    >
                      <div>
                        <CiLocationOn style={{ fontSize: "15px" }} />
                      </div>
                      <div>
                        <li onClick={() => handlePlaceChanged(description)}>
                          {description}
                        </li>
                      </div>
                    </div>
                  ))}
              </ul>
            </div>
          ) : (
            allAddress.length > 0 && (
              <div>
                {/* ALL SAVED ADDRESSED */}
                <span className="text-gray-500 p-3 text-xs">
                  your saved address
                </span>
                <div className="overflow-y-scroll no-scrollbar">
                  {allAddress.map((addressData) => (
                    <Address data={addressData} />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      {addressForm && <NewAddressCard />}
      {isConfirm && <ConfirmPopup />}
    </>
  );
}

export default LocationChange;
