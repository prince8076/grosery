import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useDispatch } from "react-redux";
import { assignSelectedAddress } from "../../../store/reducer/selectAddessSlice";

function SearchAddress({ handleSelectLocation }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const dispatch = useDispatch();

  // SET THE LATITUDE AND LONGITUDE
  const handlePlaceChanged = async (description) => {
    setValue(description, false);
    clearSuggestions();

    handleSelectLocation(description);

    try {
      const results = await getGeocode({ address: description });
      const { lat, lng } = await getLatLng(results[0]);
      const addressPos = { lat: lat, lng: lng };
      const payload = {
        address: description,
        coordinates: addressPos,
      };
      dispatch(assignSelectedAddress(payload));
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div className="w-full flex flex-col justify-center absolute top-14 md:top-3 p-2">
      <div className="w-full  flex items-center gap-3 h-12 px-5 rounded-lg bg-white">
        <CiSearch className="text-3xl text-custom-purple text-bold" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="search Location"
          className="w-full px-1 outline-none font-bold text-xs"
          required
        />
        <IoMdClose
          className="hover:text-red-700"
          onClick={() => setValue("")}
        />
      </div>
      <div
        className={`bg-white  overflow-y-scroll ${
          value && "border border-gray-200 text-gray-500"
        }`}
      >
        <ul className="">
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <li
                key={place_id}
                onClick={() => handlePlaceChanged(description)}
                className="hover:bg-pink-200 px-2 py-1 text-xs"
              >
                {description}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchAddress;
