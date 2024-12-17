import { findDuration } from "../reducer/selectAddessSlice";

// FIND DELIVERY TIME BETWEEN SOURCE TO DURATION METHOD
const center = { lat: 28.63857, lng: 77.03953 };

export const calculateDistance = (description) => {
  return (dispatch, getState) => {
    try {
      const distancesServices = new window.google.maps.DirectionsService();

      distancesServices.route(
        {
          origin: center,
          destination: description,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (respone, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            const route = respone.routes[0];
            const leg = route.legs[0];
            const directionsInMinutes = Math.round(leg.duration.value / 60);
            dispatch(findDuration(directionsInMinutes));
          } else {
            console.error("Error in directions");
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
