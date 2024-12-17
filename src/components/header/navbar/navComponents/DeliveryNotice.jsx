
import { generalSelector } from "../../../../store/reducer/generalSlice";
import { showChangeLocation } from "../../../../store/reducer/selectAddessSlice";
import LocationChange from "../../../addresspage/addressUI/LocationChange";
import { useGoogleMap } from "../../../context/MapLoaderContext";
import { useDispatch, useSelector } from "react-redux";



// deliveryNotice
function DeliveryNotice() {
    const { windowWidth } = useSelector(generalSelector);
    const { changeLocation, DeliverTime } = useSelector(
      (state) => state.selectAddressSlice
    );
    const { isLoaded } = useGoogleMap();
    const dispatch = useDispatch();
    const { landmark, tag } =
      localStorage.getItem("location") !== null &&
      JSON.parse(localStorage.getItem("location"));
  
    // IF LOCATION IS NOT SELECTED THEN SHOW POP UP
    const location =
      localStorage.getItem("location") !== null &&
      JSON.parse(localStorage.getItem("location"));
    if (!location && isLoaded) {
      dispatch(showChangeLocation());
    }
    // Select Location btn handler
    function handleSelectLocation() {
      dispatch(showChangeLocation());
    }
  
    return (
      <>
        <div
          className={`flex flex-col ${
            windowWidth > 640 && "ms-auto"
          } lg:ms-0 h-custom-57  w-auto gap-0 md:gap-1 flex-shrink-0 pt-1 sm:ps-4 pe-2`}
        >
          <p className="text-sm md:text-[18px] mr-1 sm:mr-0 font-semibold ">
            {DeliverTime
              ? `Deliver in ${DeliverTime} minutes`
              : " Deliver in 10 minutes"}
          </p>
          <button
            onClick={handleSelectLocation}
            className="text-[10px] md:text-[13px] text-gray-600 md:-translate-y-1 flex items-center"
          >
            {landmark ? (
              <>
                <span className="font-bold ">{tag ? `${tag}-` : ""}</span>
                {landmark.slice(0, 20)}
                ...
              </>
            ) : (
              "select location"
            )}
            <img
              src="/images/app/navbar/arrowdown.png"
              className={`${changeLocation && "rotate-180"}`}
              alt="Arrow Down"
            />
          </button>
        </div>
        {changeLocation && <LocationChange />}
      </>
    );
  };


  export default DeliveryNotice;