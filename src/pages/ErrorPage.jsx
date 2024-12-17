import React from "react";
import { PiNumberCircleZero } from "react-icons/pi";
import { NavLink } from "react-router-dom";
function ErrorPage() {
  return (
    <div>
      <section className="flex min-h-[100vh] justify-center items-center">
        <div className="row">
          <div className="grid grid-cols-14">
            <div className="text-center">
              <h2 className="font-display font-bold text-5xl flex justify-center items-center my-5">
                <span>4</span>
                <PiNumberCircleZero />
                <span>4</span>
              </h2>
              <h2 className="font-display text-2xl">Oops! You are lost.</h2>
              <p>The page you are looking for was not found.</p>
              <button className="m-10 border p-3 w-[220px] bg-custom-purple text-white rounded-lg">
                <NavLink to="/">Back to Home Page!</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
