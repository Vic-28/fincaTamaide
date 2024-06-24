import React, { useEffect } from 'react';
import './links.css';
import airbnbLogo from '/src/assets/img/airbnb.png';
import bookingLogo from '/src/assets/img/brand-booking.svg';

function Links() {
    useEffect(() => {
        const navElement = document.querySelector('.links-nav.link-non-active');
        if (!navElement) return;

        const handleClick = () => {
            navElement.classList.toggle('link-active');
            navElement.classList.toggle('link-non-active');
        };
        
        navElement.addEventListener('click', handleClick);

        return () => {
            navElement.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <aside className='links'>
            <nav className='links-nav link-non-active'>
                <span className="material-symbols-outlined links-nav-icono">
                    night_shelter
                </span>
                <span className="material-symbols-outlined links-nav-icono-salida">
                    close
                </span>
                <img className='links-nav-logo' src={airbnbLogo} alt='Airbnb logo' />
                <img className='links-nav-logo' src={bookingLogo} alt='Booking logo' />
            </nav>
        </aside>
    );
}

export default Links;
