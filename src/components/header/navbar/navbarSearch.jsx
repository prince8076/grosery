import React, { useEffect, useRef } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import Logo from './navComponents/Logo';
import { useSelector, useDispatch } from 'react-redux';
import { generalActions, generalSelector } from '../../../store/reducer/generalSlice';
import CartPopup from '../../cart/CartPopup';
import MyCartBtn from './navComponents/MyCartBtn';


function NavbarSearch() {
    const dispatch = useDispatch();
    const { windowWidth, searchQuery, cartState } = useSelector(generalSelector);

    // to redirect back 
    const handleGoBack = () => {
        window.history.go(-1);
    };


    // searchbar component
    const Searchbar = () => {
        const inputRef = useRef(null);
        useEffect(() => {
            inputRef.current.focus();
        }, []);

        return (
            <div className={`searchbar_comp flex gap-3 p-3 sm:w-auto flex-grow bg-[#F8F8F8]
                 items-center rounded-[15px]  sm:h-custom-57 
                ${windowWidth>780 ? " border-[2px] border-[#EEEEEE]":"h-[45px] px-5"} `} 
                >
                {windowWidth<=780 ? ( <FaArrowLeftLong title="Home" size={13} color="gray" onClick={()=>handleGoBack()}/>)
                                  :( <img className="h-3 sm:h-5 ms-2" src="./images/app/navbar/searchIcon.png" alt="Search Icon" />)
                }      
                <input
                    ref={inputRef}
                    type="text"
                    onChange={(e) => dispatch(generalActions.setSearchQuery(e.target.value))}
                    value={searchQuery}
                    className={`flex-grow ms-1 py-2 bg-transparent text-xs sm:text-[15px] placeholder-gray-500 focus:outline-none placeholder`}
                    placeholder='Search for masala atta and more'
                />
            </div>
        );
    }

    return (
        <div className='navmini_container bg-white py-[18px] px-[1px] flex flex-col items-center sticky top-0 z-30  border-b-[1px]'>
            {windowWidth > 780 &&
            <div className="toppart h-custom-57 flex w-full items-center px-3">
                <button className="back_button text-lg font-extralight p-2 -translate-y-2  md:h-3/5 rounded-xl mr-2"
                    onClick={handleGoBack}>
                    <FaArrowLeftLong title="Home" size={13} color="#8E0F5D" />
                </button>
                <div className='nav_components flex justify-between gap-2 sm:gap-6 h-full flex-grow items-center'>
                    <Logo />
                    {windowWidth > 780 && <Searchbar />}
                    <MyCartBtn />
                </div>
            </div>
            }
            <div className={`bottompart flex w-full items-center px-3 ${windowWidth<=780 && "pt-5"}`}>
                {windowWidth <= 780 && <Searchbar />}
            </div>
            {cartState && (
                <div className="cart_popup_container fixed inset-0 z-50 flex items-start justify-end bg-black bg-opacity-50 overflow-y-scroll">
                    <CartPopup />
                </div>
            )}
        </div>

    );
}

export default NavbarSearch;
