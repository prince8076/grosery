import React, { useEffect } from "react";

import Homepage from "./Homepage";
import PageWapper from "../components/wrapper/PageWapper";

function Home() {
  return (
    <PageWapper className="px-4">
      <Homepage />
    </PageWapper>
  );
}

export default Home;
