import React, { useState, useEffect } from 'react';
import { TbArrowBigUpLineFilled } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { generalSelector } from '../../store/reducer/generalSlice';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { windowWidth } = useSelector(generalSelector);

    const handleScroll = () => {
        // Show the button when the user has scrolled down 500px
        if (window.scrollY > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };   

    const handleClick = () => {
        //add Scroll to top
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Remove scroll event listener on cleanup
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        isVisible && windowWidth > 600 && (
            <div className='fixed bottom-7 right-2 lg:right-8 z-50'>
                <button
                    className='bg-white border-none outline-none rounded-full p-2 shadow-lg transition-all md:hover:scale-125 hover:bg-custom-pink'
                    onClick={handleClick}
                >
                    <TbArrowBigUpLineFilled size={25} color='#8E0F5D' title='scroll to top' />
                </button>
            </div>
        )
    );
}

export default ScrollToTop;
