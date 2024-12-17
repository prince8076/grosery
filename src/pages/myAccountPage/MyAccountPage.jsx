import React from "react";
import PageWrapper from "../../components/wrapper/PageWapper";
import MyAccountSideBar from "../../components/myAccount/MyAccountSideBar";
import { Outlet } from "react-router-dom";
import Logout from "../../components/myAccount/UI/Logout";
function MyAccountPage() {
  return (
    <PageWrapper className="md:py-5 md:h-[calc(100vh-84px)] px-4">
      <div className="md:border rounded-lg md:shadow-custom-shadow w-full md:w-[90%] lg:w-[80%] m-auto h-full md:h-[80vh] flex flex-col md:flex-row">
        <MyAccountSideBar />

        <div className="w-full md:w-[calc(100%-200px)]">
          <Outlet />
        </div>
      </div>
    </PageWrapper>
  );
}

export default MyAccountPage;
