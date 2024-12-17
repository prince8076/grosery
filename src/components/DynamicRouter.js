import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import SEO from "./Seo";
import routes from "../routes.json";

import Footer from "./footer/footer";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Search from "../pages/Search/Search";
import ProductDescription from "../pages/ProductDescription/ProductDescription";
import AddressContainer from "../components/addresspage/AddressContainer";
import ErrorPage from "../pages/ErrorPage";
import CategoryPage from "../pages/categoryPage/CategoryPage";
import MyAccountPage from "../pages/myAccountPage/MyAccountPage";
import Logout from "./myAccount/UI/Logout";
import MyAddress from "./myAccount/UI/MyAddress";
import MyOrders from "./myAccount/UI/MyOrders";
import MyWallet from "./myAccount/UI/MyWallet";
import AccountPrivacy from "./myAccount/UI/AccountPrivacy";
import DeleteAccount from "./myAccount/UI/DeleteAccount";
import NavbarDefault from "./header/navbar/navbarDefault";

import TermsandConditions from "./terms/TermsandConditions";
import Privacypolicy from "./terms/Privacypolicy";
import Refundpolicy from "./terms/Refundpolicy";
import Cancellationpolicy from "./terms/Cancellationpolicy";
import Walletpage from "./Walletpage";
import { Order } from "./orderTaken/Orders";
import ProfileEdit from "./myAccount/UI/ProfileEdit";
import OrderTracking from "./myAccount/UI/OrderTracking";
const components = {
  Home,
  Contact,
  ProductDescription,
  Search,
  AddressContainer,
  ErrorPage,
  CategoryPage,
  MyAccountPage,
  Logout,
  AccountPrivacy,
  MyAddress,
  MyOrders,
  MyWallet,
  DeleteAccount,
  TermsandConditions,
  Privacypolicy,
  Refundpolicy,
  Cancellationpolicy,
  Walletpage,

  Order,
  ProfileEdit,
  OrderTracking,
};

const DynamicRouter = () => {
  const location = useLocation();
  const shouldShowNavbarAndFooter = () => {
    const path = location.pathname;
    return !path.startsWith("/search");
  };
  return (
    <>
      {shouldShowNavbarAndFooter() && <NavbarDefault />}
      {/* <Header /> */}
      <Routes>
        {routes.map(({ path, component, children, page }) => {
          const Component = components[component];
          return (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <SEO page={page} />
                  <Component />
                </>
              }
            >
              {children &&
                children.map(
                  ({
                    path: childPath,
                    component: childComponent,
                    page: childPage,
                  }) => {
                    const ChildComponent = components[childComponent];
                    return (
                      <Route
                        key={childPath}
                        path={childPath}
                        element={
                          <>
                            <SEO page={childPage} />

                            <ChildComponent />
                          </>
                        }
                      />
                    );
                  }
                )}
            </Route>
          );
        })}
      </Routes>
      {shouldShowNavbarAndFooter() && <Footer />}
    </>
  );
  // return (
  //   <>
  //     <Navbar />
  //     {/* <Header /> */}
  //     <Routes>
  //       {routes.map(({ path, component, page }) => {
  //         const Component = components[component];
  //         return (
  //           <Route
  //             key={path}
  //             path={path}
  //             element={
  //               <>
  //                 <SEO page={page} />
  //                 <Component />
  //               </>
  //             }
  //           />
  //         );
  //       })}
  //     </Routes>
  //     <Footer />
  //   </>
  // );
};

export default DynamicRouter;
