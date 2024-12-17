import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function ImageSlider({ images, setFrontimg }) {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };

  const previous = () => {
    sliderRef.slickPrev();
  };
  const [image, setImage] = useState(images);
  var settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    slidesToScroll: 2,
    touchMove: true,
    arrows: false,
    draggable: true,
    focusOnSelect: true,
  };
  return (
    <div className="lg:w-[500px] flex flex-row items-center justify-evenly">
      <div className="w-[30px] h-[30px] gap-[0px] object-cover rounded-[13%] sm:h-[30px] sm:w-[30px] sm:object-cover md:h-[30px] md:w-[30px] md:object-cover">
        <div className="" onClick={previous}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>

      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="w-[80%]"
      >
        {image.map((data, index) => {
          // if (index !== 0) {
          return (
            <div
              className="w-[50px] h-[50px] gap-[0px] object-cover rounded-[13%] sm:h-[70px] sm:w-[70px] sm:object-cover md:h-[70px] md:w-[70px] md:object-cover "
              onClick={() => setFrontimg(data.link)}
            >
              <img
                src={data.link}
                alt=""
                className="w-[50px] h-[50px] gap-[0px] object-cover rounded-[13%] sm:h-[70px] sm:w-[70px] sm:object-cover md:h-[70px] md:w-[70px] md:object-cover"
              />
            </div>
          );
          // }
        })}
      </Slider>

      <div className="w-[30px] h-[30px] gap-[0px] object-cover rounded-[13%] sm:h-[30px] sm:w-[30px] sm:object-cover md:h-[30px] md:w-[30px] md:object-cover">
        <div className="" onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
