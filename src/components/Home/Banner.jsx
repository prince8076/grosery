import React, { useEffect, useState } from "react";
import axios from "axios";
import WalletPage from "../Walletpage";

function Banner() {
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await axios.get(
          "https://6ammart-admin.6amtech.com/api/v1/react-landing-page"
        );
        setBannerData(response.data);
      } catch (error) {
        console.error("Error fetching banner data:", error);
      }
    };

    fetchBannerData();
  }, []);

  if (!bannerData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="relative h-[400px] md:h-[36.59vw] mt-3 rounded-2xl overflow-hidden flex items-center">
      <div className=" background_banner absolute inset-0">
        <img
          src="banner-bg.png"
          alt="Banner Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        <div className="absolute inset-0 bg-pink-300 opacity-30"></div>
      </div>

      <div className="top_left_vegies absolute w-14 h-14 md:w-[200px] md:h-[200px] top-0 left-0">
        <img
          src="hero-top-left.png"
          alt="Hero Image"
          className="w-14 h-14 md:w-full md:h-full object-cover"
        />
      </div>

      <div className="bottom_left_vegies absolute w-14 h-14 md:w-[200px] md:h-[200px] bottom-0 left-0">
        <img
          src="hero-bottom-left.png"
          alt="Hero Image"
          className=" w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 ml-[4vw] mt-[-2vw] flex flex-col md:flex-row w-full p-4 md:p-8">
        {/* Left Div - Text and Button */}
        <div className="flex flex-col justify-center items-start w-full md:w-[45%] md:p-5">
          <h1 className="font-bold text-gray-900 text-[md] md:text-[36px] leading-tight">
            Grocekart Express: <br /> Groceries In Just 10 Minutes!
          </h1>
          <p className="text-gray-900  text-[sm] md:text-[18px] mt-4">
            Because Your Time Matters
          </p>
          <p className="text-gray-600  text-[0.8em] md:text-[16px] mt-3">
            Experience the ultimate convenience with Grocekart Express. Get your
            fresh groceries delivered to your doorstep in just 10 minutes.
          </p>
          <a
            href={bannerData.company_button_url}
            className="mt-6 bg-custom-purple text-white rounded-lg shadow-lg hover:bg-custom-purple/60 transition duration-300 
            ease-in-out inline-block px-3  text-sm md:w-[180px] md:h-[48px] text-center leading-[48px]"
          >
            Shop Now
          </a>
        </div>

        {/* Right Div - Image and Logo */}
        <div className="absolute right-[-3.7vw] -bottom-7 md:bottom-0 flex items-center w-[45%] h-[35vw]">
          <div className="relative w-[80%] h-[105%]">
            {/* Dual Circular Background Behind the Image */}
            <div className="absolute inset-0 mt-[5vw] ml-[1vw] flex justify-center items-center w-full h-full">
              {/* Outer Circle with Border */}
              <div className="absolute rounded-full border-4 w-full h-full border-custom-purple rounded-b-none"></div>
              {/* Inner Circular Background */}
              <div className="absolute rounded-full bg-custom-purple w-[95%] h-[95%] rounded-b-none"></div>
            </div>

            {/* Small Circular Image with Text */}
            <div className=" hidden md:block absolute top-[10vw] bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-2 w-[9vw] h-[9vw]">
              <div className="absolute left-1/2 transform -translate-x-1/2">
                <img
                  src="hero-vegetable1.png"
                  className="w-16 h-16 object-cover rounded-full border-4 border-white"
                />
              </div>
              <div className="absolute text-center">
                <h6 className="text-xs mt-[4.5vw] text-black leading-tight">
                  Grocekart: Your one-
                  <br />
                  Stop Grocery Shop
                </h6>
              </div>
            </div>

            {/* Image of the Person */}
            <img
              src="hero-person.png"
              alt="person with Groceries"
              className="absolute top-[8vw] right-[3vw] w-full h-full object-cover z-10"
            />
          </div>
        </div>
      </div>
    </div>



    </>
  );
}

export default Banner;
