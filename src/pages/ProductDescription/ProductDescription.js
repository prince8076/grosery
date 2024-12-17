import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageMagnifier from "../../components/ProductDescriptionComponent/ImageMagnifier";
import ImageSlider from "../../components/ProductDescriptionComponent/ImageSlider";
import DescriptionText from "../../components/ProductDescriptionComponent/DescriptionText";
import ProductDescriptionFrontImage from "../../components/ProductDescriptionComponent/ProductDescriptionFrontImage";
import ProductDescriptionAddButton from "../../components/ProductDescriptionComponent/ProductDescriptionAddButton";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { generalSelector } from "../../store/reducer/generalSlice";

function ProductDescription() {
  const { currentProduct, windowWidth } = useSelector(generalSelector);
  const [name, setname] = useState(
    (currentProduct && currentProduct.name) ||
      "Home/Exotic/Fuji Apple - Imported"
  );
  const [frontImg, setFrontimg] = useState(currentProduct.image_full_url || '/images/dummy_img.png');

  const [isHovered, setIsHovered] = useState(false);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const images = [
    {
      link: frontImg,
    },
    //Assuming that the first image is Product main image
    {
      link: "https://s3-alpha-sig.figma.com/img/ce84/56fc/4d20acb5f5d1f782d68ac9f12608fa66?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a3n9yT6q5qQCZhrULoDi5wpMnabLZL36ZClP7hjsWKNaCj9qcKG~~sctzkWai2KtWfgl9k46HIb0PxKICE44nQNNT86ANkaV0lWaCpMT-ALx2eTr~UTj8JguNivTMvYxQJOywrMdSysvN9ObIC9jJwNsyXLQea48M3mIEusYubMAaU8eFdoiDP1q37TSm-0vs5FyOMKP~6O5jhqh4EajEBxauPBzBZHcMnS~E~ILcdmKIRVYEq4J-Y1n5VGw2ztQa9A~-3300HNzimBnbwA94IqhWxD5j6H3KPA-Rs8ZK7LKCzsbka07XUC-jYexSxE59YdTf99OlPkO55K3G0ZFaw__",
    },
    //Assuming that this are the small images
    {
      link: "https://s3-alpha-sig.figma.com/img/2759/25ef/be4c3a45abf69bfa78d1dc63e762235d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MjxyvdWt2FO6aPo4XtwFc82aSJCuG-ClD7KPfCjL1PV-DlAZnoe3E05HwZAlceYLqLtFiEubGxGW8X3vPafo-LdHLiXz73Y4kx~pxmj~ssrepfhIK~SP9NY-sxTBlXSXjLSJ3HuFNiE8o4MzKwSkr5XP0xz5IibqNhLOQmSDQ2pUKPpFOkW9INkFRhd17zJgtg5-bDNZbYi4ROSeuoNtKP6m~vEwvRFwx7ZGROxLpwDhC6BLddvUDgyG8zUk~tdgbM5Axf6IvILNp2WIViMKPrxcssqpb8PLnNCFyQMfxzAwUmFrm72x7KYtoKvvuMl--2QbCAEkJRTzH9kdyUhk1A__",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/a331/6bb3/237f4509a62f52faafea69cc351885fa?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SNm-npjf~N5qD2I1OuWkTvWDR5hDjcwQwo-KBKceAT~SQHmURJSRp9Jt6eOTztwoExu~wSobhZG~nn5O416wnt~tZl6eedIZ46a9abwvEu9lFkBs1RXN78MDC9tnpajyRF~YHwXpNLUraFkcuuTf3rp4pO1piVXNAengX5ArPDE5LAZUB9LTB9eaG3mp0PI4JlX1PLwerrF6WvtnLAm8BECDx7r~9k465C8VGq1zXzwE53vr3SokGDTjyMHkgRZdEbSTwVfw1okCtV9ByGzKMrbTp2CfHq6ZjwD6dEETvojq~fnULomPGMOSFQ9YrdIZqP3D5zZGrhUR65HOS~4ETQ__",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/b82f/1a25/f782bdf123493ef8a7460fcb67fa2f98?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dj~0ipJkWQF~YfLK86etg0Df9AFiy1Hg7--ZSdY4lDnDN47s~x3KwxOhkvmpph2k4z2izcovmtyYvh6Kl20K7TXkd633orUkpPoXLt62DBIn7h3I-L8tlncDXGYDFPGhyiISv0q-Q5KsxBV4g8sut2lwqJ~JjjN~fSH3tTQeIuj-71y6xdSc~wYRBXd-TEZiopJqKn0kUUdISpGPPcFhvMl58Hd9YR~T2O1Lv1QuvtIe-r~um~U0YoL72Is4W15-mViIgLmeHKt~0xCmvs9v9J4KRKEDk2uX-HCY0ej7T9Rl76C6vZtFkxpNiiGHsjPa-m30B4QCWalNXnDifxTe3g__",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/ace9/e316/c6b11c22612307bf677ebd7c9848bfd4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fu3JcOAX0IRn4BtOQPWuTatQRYD65bYFzxBCc7nWPfg7rddgUtzL~LM9pt7mXyHAnMdVBD1gW4vexrVPIJs29KOhtiRj~xj8EnHwqBMkGdTGzIoI2wiI7w-x9AyUyaz2NlV3bY1QemccLc~1WMrvI72NMdjeUPiz7E1Bb7IUzc5oM2V7q5pMMI~hIn4QpChkc2B0jwQOxHaiLnq3PKq2vYwIa~HkZURONC2Ze9NkeRYG~qVr9X8uyR7HnJRirnJ~ho3ZSwd7d4HDaWPBEGncG3oOG3hgnGwRYvddKy-Q6vs~mACHRtdBltdwkw9WsxPGfbgZbCZa~jrOXiEBDHuPaQ__",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/6c1a/cf2b/359e418492bc1fd0db60c76db1a369cb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kipGLlscMxa6HGJ5jJV~doOz5CtSOpWCZ5YEF~CB6zGDFKqOsvR6Py18cb0KwvteCLK9beHy5Cs9M1bC0gP9C5zntPKaHYsKSAgyWSuU~AY6~OYrfCTzgkFCeKkl5hVQR4jxeSDjiAefaV3A0HanVuAlx1TKuNSRYi6df~5czfkSQ3vgl3d9t42UDOfEPfajq~Xnl6Ocl8zaE4iy2lcvkbRV9C5yD1Ah7n-vCkVqQUKB5lpPUPkopkRZz0yp8PP6luhIybFy5K0vqFj3fW7mL6P0Clt0YBgjabnGKPMhoSbZ~SWN5XeqQDL~HRe1Lzd6i~3Yyl8YbfqfUWs0H0xa7g__",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/7a0b/73f6/686479efdc72ce7d48ad931aa0d2c7d0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlQQZHRgE7ezMiVET2goq05QvvtGA12PLTL3bjYSVEZX1rQxP1ScEhfypgjggn8~hP5l6g3XiBVT1bvNWJvV9CsCCkROQAuBmLcgwwJVgXf4E7d2E0Kk3tX6r925~w18NveUsKx51zEOP~MSgBh-g1ENAGzXIEMmwyYQFDO2ZZ~U2hoe7Ln~A3Dm1e8sVJDevfgrSz6-SCYCAecqP5eKIKlnzTr0~PNxGIctN29IoKc5bQk5JyIUrzQmgxE6iTVKrrN77~qESS5Cx~ki6BslGvb9FhN9~2qdmF~QsjkIeDkqENneIfaveyqTMYP3WjPxLeanM34z7896Cu3X6J52hg__",
    },
    {
      link: "https://media.giphy.com/media/uhdwMeRbqqQes/giphy.gif",
    },
  ];

  // CartData which is on right hand side
  const cartData = {
    text: "Home/Exotic/Fuji Apple - Imported",
    title: "Fuji Apple - Imported",
    quantity: "1 Kg",
    price: "150",
    actualPrice: "200",
    off: "21",
    time: "10",
  };

  const gorcedata = [
    {
      link: "https://s3-alpha-sig.figma.com/img/c0ed/df7d/b55191c8fbc53871bd96eea2deabb006?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IUvcSqmvaZq2vBaIgL3RoB47wmyoo1Msdoe~3R3vf8Fzx4PQN6oqG8PWZocjLwcd2pa0VZx6PoQMs9Kq3FZok~T4--~pD~CWnUZ5FB27Q~WpM-UK1KG5aiabzr9mx9qBdQNGwYt62h3aDkEqMh8cSkGOJgve0N23dnXEpLHmaiKH~3modpdloEBi28Q1Asqn8SPTFxHtsQhX7kG4LHCja9bmwWaLzgn7WWnZqIUuZdOx~n-V~QZmlUDz0ITLuGiLlu56y-mCkkslpOUXAZAtsyySIRNf2WiaT7mXoZTXyAco4vd9KHArPXPFHIL0VFrH0hyiI-vqxHCYaYTNCEVvjA__",
      title: "Superfast Delivery",
      des: "Get your order delivered to your doorstep at the earliest from dark stores near you.",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/0d28/5316/239d1eeeeb42861ec02386dfe80fc151?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gMurb6PM8C-KGbyFJO7PtZACOWtQD8y~zayc5~lvUwu6pL7J3q1AwGzrgsoHaT5~QpEVK0naGdqRA63qPWWQGGFmNlPgofSL5J3VRDYGcx4sSvUapoRgzEZoZhWHHXDQz1Tpz4THnU4p42TvM26xg1jMRhW4I~pl3T9UaexTlwg2J8IsRgkDy9HGkN~9MSZWtXQNmSsLTdhdupgDVRPHR9kzHmsEJn3WbnR2flmUArfxYMlp3b25sfvB2bLeY1T2bfwlFq-wPGAffULOP9P0RIW8QdW~l6ofgLRjUzl82UCLZPTJJhhd2t57nFx7qz3IVdNymP87lvKj4pJdXqyEEA__",
      title: "Best Prices & Offers",
      des: "Best price destination with offers directly from the manufacturers.",
    },
    {
      link: "https://s3-alpha-sig.figma.com/img/6a31/292b/a7b73f63c61bbf8d53bb942c14b98418?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cBXt5rIDB7IcXyKyhNNfkQoXKcmfZ8fFKnkfPLIxmOPedJQEww0yJzeYruI6CteruiU2FLtclA6OeKN8AkqRnZo-jtcrWiICmHu3-rTHCYgswUx-PnmbnzsGqzkPkhPDPB0FfnZqUgEVe1VTqjf3s2g5I3X6Pv-azwpQ2o57akvEfMXafalUsZ2-cEzsg~-yb6P5PRmKYLW0PDuwJPvDA1r3uf6Ua9FaVuvSbge~gkezuLGI5B9wZif3po4SliBxGHYDotHiedGNLEPq8v~KoNETXPUmHa3vUpJQflU4a2snk9sCAbwU8xWQUb4pQAEyySZ8N4D1Y~TdUeumJNoblQ__",
      title: "Wide Assortment",
      des: "Choose from 5000+ products across food, personal care, household & other categories.",
    },
  ];

  //product description text
  const prodText = [
    {
      title: "Storage Tips",
      detail:
        "To maintain freshness, wrap in plastic bag and store in the vegetable crisper of the refrigerator.",
    },
    {
      head: "Product Details",
      title: "Unit",
      detail: "2 pieces (250-350 g)",
    },
    {
      title: "Nutrient Value & Benefits",
      detail:
        "Rich source of phytonutrients and antioxidants and also contains small amount of minerals like Potassium, Phosphorus and Calcium. Helps in detox, boosts the immune system and is beneficial for overall well-being.",
    },
    {
      title: "Sourced From",
      detail: "From Japan",
    },
    {
      title: "Shelf Life",
      detail: "3 days",
    },
    {
      title: "Country Of Origin",
      detail: "India",
    },
    {
      title: "FSSAI License",
      detail:
        "13621034000190,10019047001269,Udyam-TS-02-0009240,13617034000317,11219332000914,11221303000189,12421023001533,21221179002239,21219187001929,11221331000389,21213013000209,21219014001027,11219332000914,10020043003204,2122001000239,21221113001496,21221141000035,11220302000966,13319002000537,22219069000218,22220066000248,30210930108860945,10821999000396,20820005003947,13321009000162,13321011000779,13318002000528,13319002000537",
    },
    {
      title: "Customer Care Details",
      detail: "Email: info@blinkit.com",
    },
    {
      title: "Return Policy",
      detail:
        "The product is non-returnable. For a damaged, rotten or incorrect item, you can request a replacement within 48 hours of delivery.In case of an incorrect item, you may raise a replacement or return request only if the item is sealed/ unopened/ unused and in original condition",
    },
    {
      title: "Expiry Date",
      detail: "Please refer to the packaging of the product for expiry date.",
    },
    {
      title: "Seller",
      detail: "Moonstone Ventures LLP",
    },
    {
      title: "Seller FSSAI",
      detail: "13323999000008",
    },
    {
      title: "Description",
      detail:
        "Fuji apple is a popular variety of apple known for its crisp texture, sweet flavour, and dense flesh. It has a yellow-green skin with red streaks and is often considered one of the best-tasting apple varieties.",
    },
    {
      title: "Disclaimer",
      detail:
        "Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.",
    },
  ];

  // const windowWidth = useRef(window.innerWidth);
  // const [frontImg, setFrontimg] = useState(images[0].link);

  return (
    <div className="lg:flex">
      <div className="lg:mx-auto">
        <div className="">
          {/* First Container Both left and right*/}
          <div
            className={`m-4 grid  ${
              windowWidth < 1045 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {/* left part */}
            <div className="flex flex-col gap-2 border-b border-[#00000026] border-solid border-spacing-y-2 py-4 lg:w-[600px] lg:h-[600px] xl:w-[600px] xl:h-[600px]">
              {/* Front or Big image image */}
              {windowWidth < 1045 ? (
                <ProductDescriptionFrontImage frontImg={frontImg} />
              ) : (
                <div
                  className={`hidden md:flex object-cover w-[500px] h-[450px] justify-center items-center`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {/* Front Image + Zoom in feature */}
                  <ImageMagnifier img={frontImg} className="" />
                </div>
              )}
              {/* Left Arrow all images and right arrow */}
              <ImageSlider
                images={images}
                setFrontimg={setFrontimg}
              ></ImageSlider>
            </div>
            {/* right part */}
            {!isHovered && (
              <ProductDescriptionAddButton
                cartData={cartData}
                name={name}
                gorcedata={gorcedata}
              ></ProductDescriptionAddButton>
            )}
          </div>
          {/* Product text */}
          <DescriptionText prodText={prodText}></DescriptionText>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
