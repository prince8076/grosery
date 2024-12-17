import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { generalSelector } from "../../store/reducer/generalSlice";

const usefullLinks = [
    { id: "1", name: "Vegitables & Fruits", url: "/vegetables-fruits" },
    { id: "2", name: "Dairy & Breakfast", url: "/dairy-breakfast" },
    { id: "3", name: "Munchies", url: "/munchies" },
    { id: "4", name: "Cold Drinks & Juices", url: "/cold-drinks-juices" },
    { id: "5", name: "Instant & Frozen Food", url: "/instant-frozen-food" },
    { id: "6", name: "Tea, Coffee & Health Drinks", url: "/tea-coffee-health-drinks" },
    { id: "7", name: "Bakery & Biscuits", url: "/bakery-biscuits" },
    { id: "8", name: "Sweet Tooth", url: "/sweet-tooth" },
    { id: "9", name: "Atta, Rice & Dal", url: "/atta-rice-dal" },
    { id: "10", name: "Paan Corner", url: "/paan-corner" },
    { id: "11", name: "Organic & Premium", url: "/organic-premium" },
    { id: "12", name: "Baby Care", url: "/baby-care" },
    { id: "13", name: "Pharma & Wellness", url: "/pharma-wellness" },
    { id: "14", name: "Cleaning Essentials", url: "/cleaning-essentials" },
    { id: "15", name: "Home & Office", url: "/home-office" },
    { id: "16", name: "Dry Fruits, Masala & Oil", url: "/dry-fruits-masala-oil" },
    { id: "17", name: "Sauces & Spreads", url: "/sauces-spreads" },
    { id: "18", name: "Chicken, Meat & Fish", url: "/chicken-meat-fish" },
    { id: "19", name: "Ice Creams & Frozen Desserts", url: "/ice-creams-frozen-desserts" },
    { id: "20", name: "Personal Care", url: "/personal-care" },
    { id: "21", name: "Pet Care", url: "/pet-care" },
    { id: "22", name: "Beauty & Cosmetics", url: "/beauty-cosmetics" },
    { id: "23", name: "Magazines", url: "/magazines" },
    { id: "24", name: "Books", url: "/books" },
    { id: "25", name: "Toys & Games", url: "/toys-games" },
    { id: "26", name: "Print Store", url: "/print-store" }
];


function Footer () {

    const [gridCols, setGridCols] = useState('grid-cols-1');
    const {windowWidth} = useSelector(generalSelector);

    // grid resizing
    useEffect(() => {
            if (windowWidth <= 834) {
                setGridCols('grid-cols-2 sm:grid-cols-3 ');
            }
             else if (windowWidth < 1014) {
                setGridCols('sm:grid-cols-2 md:grid-cols-2');
            }
             else {
                setGridCols('sm:grid-cols-2 md:grid-cols-3');
            }
        
     
    }, []);

   
 return(
        <div className="footer_container ">
            <div className="footer_main w-full bg-custom-pink p-3 sm:p-10  sm:pr-1 ">
                <div className="top_section flex flex-col-reverse lg:flex-row gap-10">
                    {/* left section  */}
                    <div className="left_section w-64 flex flex-col flex-shrink-0 gap-5 mt-20 "> 
                        <img className="logo w-32 " src="/images/app/navbar/grocekart_logo.png" alt="Logo"/>
                        <p className="para_1 text-xs font-extralight w-56 leading-5 text-gray-700" style={{wordSpacing:'0.25rem,'}}>
                            Focuses on the smart and quick service of Grocekart, making online grocery shopping a breeze.
                        </p>
                        <div className="social_media_button_container flex gap-3">                                               
                            <button onClick={()=>{window.open("https://www.facebook.com","_blank")}}>
                                <img className="ring-2 ring-black p-1 rounded-full size-6" src="/images/app/footer/icons/fb.svg" alt="fb" />
                            </button>
                            <button onClick={()=>{window.open("https://www.instagram.com","_blank")}}>
                                <img className="ring-2 ring-black p-1 rounded-full size-6" src="/images/app/footer/icons/insta.svg" alt="insta" />
                            </button>                                              
                            <button onClick={()=>{window.open("https://www.linkedin.com","_blank")}}>
                                <img className="ring-2 ring-black p-1 rounded-full size-6" src="/images/app/footer/icons/linkedin.svg" alt="linkedin"/>
                            </button>
                            <button onClick={()=>{window.open("https://www.youtube.com","_blank")}}>
                                <img className="ring-2 ring-black p-1 rounded-full size-6" src="/images/app/footer/icons/youtube.svg" alt="youtube"/>
                            </button>
                        </div>
                        <div className="app_btn_container">
                            <p className="heading my-2 text-gray-700 text-sm font-semibold">Download App</p>
                            <div className="flex gap-4">
                                <button onClick={()=>{window.open("https://play.google.com/store/search?q=grocekart&c=apps","_blank")}}>
                                        <img className="w-20" src="/images/app/footer/buttons/googleplay.png" alt="googleplay"/>
                                </button>
                                <button onClick={()=>{window.open("https://www.apple.com/in/search/Grocekart?src=globalnav","_blank")}}>
                                        <img className="w-20" src="/images/app/footer/buttons/Applestore.png" alt="appleStore"/>
                                </button>                                                   
                            </div>
                        </div>
                    </div>  
                    {/* right section  */}
                    <div className="right_section flex-grow-1 w-full">
                                <h1 className="usefull_link_heading text-center w-full o font-semibold">Useful Links</h1>
                                <div className={`category_list grid grid-cols-1 ${gridCols}    gap-3  mt-16` }>
                                        {usefullLinks.map((x=>{
                                            return(<li
                                                    key={x.id} id={`cat-${x.id}`}
                                                    //  onClick={navigate to desired page ex:- {x.url}} 
                                                        className=" text-gray-700 text-[10px] sm:text-sm">
                                                        {x.name}
                                                    </li>)
                                        }))}
                                </div>
                    </div>
                </div>
            </div>
            <div className="footer_company_name bg-custom-pink w-full py-4" style={{borderTop:'2px solid lightgray'}}>
                <h2 className="text-sm text-center font-normal">All Rights Reserved, @Accelgrowth Technology Pvt, Ltd,</h2>
            </div>
        </div>
       );
}

export default Footer