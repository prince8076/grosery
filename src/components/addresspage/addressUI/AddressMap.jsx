import React, { useEffect, useState } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsArrowLeft } from "react-icons/bs";
import { useSelector } from "react-redux";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import SearchAddress from "./SearchAddress";
import { useGoogleMap } from "../../context/MapLoaderContext";
import { NavLink } from "react-router-dom";

import { IoMdArrowDropright } from "react-icons/io";
// Map Styling
const containerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "0px 10px 10px 0px",
};

function AddressMap({ handleSelectLocation, location, confirmLocation }) {
  const { coordinates } = useSelector((state) => state.selectAddressSlice);
  const { isLoaded } = useGoogleMap();

  // const handleMarkerDragEnd = (event) => {
  //   const lat = event.latLng.lat();
  //   const lng = event.latLng.lng();
  //   console.log({ lat, lng });
  // };

  return (
    isLoaded && (
      <div className="w-full md:w-[50%] h-full flex flex-col">
        <div className="w-full relative h-full">
          <GoogleMap
            center={coordinates}
            zoom={8}
            mapContainerStyle={containerStyle}
            options={{
              zoomControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
              disableDoubleClickZoom: true,
              gestureHandling: "greedy",
            }}
          >
            <MarkerF position={coordinates} draggable={true} />
          </GoogleMap>
          <div className="w-full fixed top-0 rounded-lg border text-left flex p-3 bg-white md:hidden items-center gap-2 font-bold">
            <div className="">
              <NavLink to="/">
                <BsArrowLeft style={{ fontWeight: "900", fontSize: "20px" }} />
              </NavLink>
            </div>
            <div className="w-full text-xs">Confirm map pin location</div>
          </div>

          {/* //search places component */}

          <SearchAddress handleSelectLocation={handleSelectLocation} />

          {/* current location */}
          {/* <div className="absolute bottom-5 left-[35%] md:left-5 flex items-center bg-white border border-pink-800 text-pink-800 px-4 gap-2 rounded-lg cursor-pointer">
            <span className="text-sm">
              <FaLocationCrosshairs />
            </span>
            <h1> Go to current locations</h1>
          </div> */}
          <div className="md:hidden absolute bottom-0 w-full h-24 p-2 bg-white flex items-center justify-center">
            {location ? (
              <div
                className="bg-custom-purple w-full flex items-center justify-center gap-2 p-3 rounded-lg text-white cursor-pointer md:hidden"
                onClick={confirmLocation}
              >
                Confirm location & proceed
                <span>
                  <IoMdArrowDropright />
                </span>
              </div>
            ) : (
              <div className="w-full border h-12 p-3 bg-gray-200 animate-pulse rounded-lg"></div>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default AddressMap;
