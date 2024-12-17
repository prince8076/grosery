import { useJsApiLoader } from "@react-google-maps/api";
import { createContext, useContext } from "react";

const GoogleMapContext = createContext(null);
const API_KEY = "AIzaSyCC82gdm89GeLGa8X8cLN3wJK2BduV0G4M";
const libraries = ["places"];
export const GoogleMapProvider = ({ children }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  return (
    <GoogleMapContext.Provider value={{ isLoaded }}>
      {children}
    </GoogleMapContext.Provider>
  );
};

export const useGoogleMap = () => {
  return useContext(GoogleMapContext);
};
