import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsernamePage from "./components/logIn/UsernamePage";

import DynamicRouter from "./components/DynamicRouter";
import { useDispatch, useSelector } from "react-redux";
import { generalActions, generalSelector } from "./store/reducer/generalSlice";
import { setMainCategoryAction } from "./store/actions/mainCategoryAction";
import Loaderpage from "./pages/Loaderpage";
// import { Order } from "./components/orderTaken/Order";
import { Order } from "./components/orderTaken/Orders";

function App() {
  // ------------------------------------- EVENT HANDLERS ----------------------
  const dispatch = useDispatch();
  const { cartItems, cartState, loginState } = useSelector(generalSelector);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    dispatch(generalActions.setCartItemsCount(0));
    let z = 0;
    cartItems.map((x) => {
      z += x.quantity;
    });
    dispatch(generalActions.setCartItemsCount(z));
  }, [cartItems]);

  // for checking and setting width
  useEffect(() => {
    const handleResize = () => {
      dispatch(generalActions.setWindowWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // CALLING FUNCTION FOR FETCHING MAIN CATEGORY DATA
  useEffect(() => {
    dispatch(setMainCategoryAction(setLoader));
  }, []);
  
  // freezing scroll on popup
  useEffect(() => {
    if (cartState || loginState) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [cartState,loginState]);

  return !loader ? (
    <>
      <Router>
        <div className='App'>
          <Routes>
            <Route path="/*" element={<DynamicRouter />} />
            <Route path="/user-details" element={<UsernamePage />} />
          </Routes>
          {/* <Order></Order> */}
        </div>
      </Router>
    </>
  ) : (
    <Loaderpage />
  );
}

export default App;
