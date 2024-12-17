import React from "react";
import { Helmet } from "react-helmet";
import { SEO_CONFIG } from "../constants/index";

const SEO = ({ page }) => {
  const { title, description } = SEO_CONFIG[page] || {};
  return (
    <Helmet>
      <title>{title || "Grocekart"}</title>
      <meta name="description" content={description || "Default description"} />
    </Helmet>
  );
};

export default SEO;
