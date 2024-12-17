import React, { useEffect, useState } from "react";
import AddressForm from "./addressUI/AddressForm";
import AddressMap from "./addressUI/AddressMap";
import { useGoogleMap } from "../context/MapLoaderContext";
import { handleBackButtom } from "../../store/reducer/selectAddessSlice";
import { useDispatch } from "react-redux";
function NewAddressCard() {
  const dispatch = useDispatch();
  const { isLoaded } = useGoogleMap();
  const [location, setLocation] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 767);
  const [isFormVisible, setFormIsvible] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setIsSmallScreen(window.innerWidth < 767);
    };
    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const handleSelectLocation = (loc) => {
    setLocation(loc);
  };

  const handleConfirmLocation = () => {
    if (location && isSmallScreen) {
      setFormIsvible(true);
    }
  };

  return (
    isLoaded && (
      <div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center "
        onClick={(e) => dispatch(handleBackButtom())}
      >
        <div
          className={`w-full h-full md:w-[700px]  md:h-[400px] bg-white flex  rounded-xl `}
          onClick={(e) => e.stopPropagation()}
        >
          {!isSmallScreen && <AddressForm location={location} />}
          <AddressMap
            handleSelectLocation={handleSelectLocation}
            location={location}
            confirmLocation={handleConfirmLocation}
          />
          {/* FOR SMALL SCREEN */}
          {isFormVisible && isSmallScreen && (
            <div className="fixed inset-0 bg-stone-900/50">
              <div
                className={`w-full bg-white rounded-t-xl  absolute  transform bottom-0 transition-transform duration-300 ease-in-out ${
                  !isFormVisible ? "translate-y-full" : " translate-y-0"
                }`}
              >
                <AddressForm />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}

export default NewAddressCard;
