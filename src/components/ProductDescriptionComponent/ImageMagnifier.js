import React, { useEffect, useState } from "react";
import { EasyZoomOnHover } from "easy-magnify";
import imageCompression from 'browser-image-compression';
import { useSelector } from "react-redux";
import { generalSelector } from "../../store/reducer/generalSlice";

function ImageMagnifier({ img }) {
  const { windowWidth } = useSelector(generalSelector);
  const [watchImg, setwatchImg] = useState(img);
  const [compressedImg, setCompressedImg] = useState(null);
  const [zoomWidth, setZoomWidth] = useState(500);
  //onst zoomWidth = 500;
  useEffect(() => {
    setZoomWidth(windowWidth / 2);
  }, [windowWidth])

  // Image compressor
  async function compressImage(file) {
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 450,
      useWebWorker: true // Enables faster processing
    };

    try {
      const compressedFile = await imageCompression(file, options);
      //setCompressedImg(compressedFile);
      console.log("compressed");
      return URL.createObjectURL(compressedFile);
    } catch (error) {
      console.error('Error compressing image:', error);
    }
  }
  //set curr_image
  useEffect(() => {
    setwatchImg(img);
  }, [img]);

  // middleware
  async function convertUrlToBlob(url) {
    const response = await fetch(url);
    return await response.blob();
  }

  useEffect(() => {
    setCompressedImg('/loader.gif')
    async function handleImageProcessing() {
      const skipUrl = "6ammart-admin.6amtech.com";
      const extension = img.split('.').pop().toLowerCase();
      let fileOrBlob;
      if (typeof watchImg === 'string') {
        if (watchImg.includes(skipUrl) || extension.includes("gif")) {
          // Directly use the URL
          fileOrBlob = watchImg;
          setCompressedImg(watchImg);
          return;
        } else {
          // If img is a URL, convert it to a Blob
          fileOrBlob = await convertUrlToBlob(watchImg);
        }
      } else if (watchImg instanceof File || watchImg instanceof Blob) {
        // If img is already a File or Blob
        fileOrBlob = watchImg;
      } else {
        console.error('The provided image is not a valid File, Blob, or URL');
        return;
      }
      const compressedImageUrl = await compressImage(fileOrBlob);
      setCompressedImg(compressedImageUrl);
    }

    handleImageProcessing();
  }, [watchImg])




  return (
    <EasyZoomOnHover
      mainImage={{
        src: compressedImg,
        alt: "My Product",
      }}
      zoomImage={{
        src: watchImg,
        alt: "My Product Zoom",
      }}
      distance={30}
      zoomContainerWidth={zoomWidth}
      zoomContainerHeight={window.innerHeight - 100}
      zoomLensScale={4}
    />
  );
}

export default ImageMagnifier;
