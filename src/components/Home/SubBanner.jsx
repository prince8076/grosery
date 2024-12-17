import React, { useEffect, useState } from "react";
import axios from "axios";

const BannerCard = ({ title, description, buttonText, imageUrl }) => (
  <div className="relative h-[40vw] sm:h-[20vw] lg:h-[14vw] bg-white rounded-[20px] overflow-hidden w-[80vw] sm:w-[45vw] lg:w-[30vw] shadow-lg flex-shrink-0">
    <div className="absolute inset-0">
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>
    <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-between h-full">
      <div>
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
          {title.split(",").map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="text-xs sm:text-sm lg:text-md text-white mt-2">
          {description.split(",").map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </p>
      </div>
      <div className="absolute bottom-4 left-4">
        <button className="bg-white text-black py-1 px-3 rounded-full font-semibold">
          {buttonText}
        </button>
      </div>
    </div>
  </div>
);

function SubBanner() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6ammart-admin.6amtech.com/api/v1/react-landing-page"
        );
        const { promotion_banners_full_url } = response.data;

        const titles = [
          "Get ready for Raksha Bandhan",
          "Get printouts in minutes",
          "Pharmacy at your doorstep!",
          "Pet Care supplies in minutes",
          "Cold and Flu essentials",
          "Morning Essentials",
        ];
        const descriptions = [
          "Explore a wide range of Rakhis",
          "Safe & secure, Convenient & Fast",
          "Cough syrups, pain relief sprays & more",
          "Food, treats, toys & more",
          "Stay prepared with OTC essentials",
          "Healthy breakfast options",
        ];
        const buttonText = "Order Now";

        const newCategories = promotion_banners_full_url
          .slice(0, 6)
          .map((imageUrl, index) => ({
            title: titles[index] || "",
            description: descriptions[index] || "",
            buttonText: buttonText,
            imageUrl: imageUrl,
          }));

        setCategories(newCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
        {categories.map((category, index) => (
          <BannerCard key={index} {...category} />
        ))}
      </div>
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari, and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE and Edge */
        .scrollbar-hide {
          -ms-overflow-style: none;
        }

        /* Hide scrollbar for Firefox */
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default SubBanner;
