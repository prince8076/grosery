import axios from "axios";
import { setMainCategory } from "../reducer/mainCategorySlice";
export const setMainCategoryAction = (setLoader) => {
  return async (dispatch) => {
    const headers = new Headers({
      "Content-Type": "application/json",
      ModuleId: "1",
      ZoneId: "[1]",
      Latitude: "26.1157917",
      Longitude: "91.7085933",
    });
    try {
      const res = await axios.get(
        "https://6ammart-admin.6amtech.com/api/v1/categories",
        {
          headers,
        }
      );

      dispatch(setMainCategory(res.data));
      setLoader(false);
    } catch (error) {
      console.log(error);
    }
  };
};
